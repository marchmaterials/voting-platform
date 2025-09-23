"use client"
import ProjectDashboard from "@/components/ProjectDashboard";

export default function Page({ params }: { params: { projectSlug: string } }) {
    return <ProjectDashboard projectSlug={decodeURIComponent(params.projectSlug)} />
}