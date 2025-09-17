import { EnrichedProjectStakeholder } from "@/types/dashboard";
import { Stakeholder, STAKEHOLDER_TYPE } from "@prisma/client";
import { ChevronDown, SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";

const comingSoonStakeholders = [
    {
        key: "1",
        label: STAKEHOLDER_TYPE.ENGINEER,
        children: <div className="text-sm font-light">Coming soon</div>,
    },
    {
        key: "3",
        label: STAKEHOLDER_TYPE.CONTRACTOR,
        children: <div className="text-sm font-light">Coming soon</div>,
    },
];

type StakeholderRecord = Record<STAKEHOLDER_TYPE, Array<Stakeholder>>;

function StakeholderCollapseItem({ children, label }: { children: React.ReactNode, label: string }) {
    const [hidden, setHidden] = useState(true)
    return <div className="border-b-[1px] last:border-b-0">
        <div className="p-2 text-sm font-normal bg-gray-50 flex flex-row items-center justify-between" onClick={() => setHidden(!hidden)}>
            {label}
            <button ><ChevronDown className={`transition-transform duration-300 ${hidden ? "rotate-180" : "rotate-0"
                }`} /></button>

        </div>
        <div className={`transition-[max-height,opacity] duration-500 overflow-hidden  ${hidden ? "max-h-0 opacity-0" : "max-h-40 opacity-100"
            }`}>
            <div className="m-2">
                {children}

            </div>
        </div>
    </div>
}



function StakeholderLink({ url, name }: { url: string, name: string }) {
    return (
        <div className="text-xs font-normal">
            <a
                href={`${url}?utm_source=marchmaterials.com&utm_medium=MARCH_material_search_for_architects`}
                rel="noopener noreferrer"
                target="_blank"
                style={{ "color": "#109F00" }}
                className="inline-flex items-center gap-1"
            >
                {name}<span><SquareArrowOutUpRight color="#109F00" size={14} strokeWidth={1.5} /></span>
            </a>
        </div>
    )
}

export default function StakeholderCollapse({ projectStakeholders }: { projectStakeholders: Array<EnrichedProjectStakeholder> }) {
    const stakeholdersMap: StakeholderRecord = projectStakeholders.reduce((acc, s) => {
        const key = s.stakeholder.type[0]
        if (!key) { return acc }
        (acc[key] ??= []).push(s.stakeholder);
        return acc
    }, {} as Partial<StakeholderRecord>) as StakeholderRecord
    const stakeholderList = Object.entries(stakeholdersMap)
        .map(([type, sArray]) => {
            const key = sArray.map(s => s.id).join(",")
            const children = sArray.map(s => {
                if (s.url !== null) {
                    return <StakeholderLink url={s.url} name={s.companyName} />
                } else {
                    <div key={`${s.id}_`} className="text-sm font-light">{s.companyName}</div>
                }
            })
            return {
                key,
                label: type,
                children: <div>{children}</div>
            }
        })
        .concat(comingSoonStakeholders)
        .map(v => (<StakeholderCollapseItem label={v.label} key={v.key}>{v.children}</StakeholderCollapseItem>));

    return <div className="border-solid border border-[#e5e7eb] rounded-lg overflow-hidden">
        {stakeholderList}
    </div>
}