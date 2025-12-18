# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.3.1 AS base
WORKDIR /usr/src/app
RUN apt-get update && apt-get install -y --no-install-recommends \
    openssl ca-certificates postgresql-client \
    && rm -rf /var/lib/apt/lists/*
# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
WORKDIR /temp/dev
RUN ls -la && bun --version
# CMD ["sh"]
RUN cd /temp/dev && bun install --frozen-lockfile
FROM base AS prerelease
WORKDIR /usr/src/app

COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN bun run prisma generate
# RUN bun run build

# FROM base AS release

# COPY --from=prerelease /usr/src/app/node_modules node_modules
# COPY --from=prerelease /usr/src/app/.next .next
# COPY --from=prerelease /usr/src/app/package.json .
# COPY . .
# # run the app
USER bun
CMD [ "bun", "run", "start" ]