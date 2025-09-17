import { EnrichedProjectMaterial, EnrichedProjectMaterials } from "@/types/dashboard";
import { useState } from "react";
import { SquareArrowOutUpRight, ChevronDown } from "lucide-react";
import { Tag } from "antd";

function MaterialLink({ url, supplierName }: { url: string | null, supplierName: string | null }) {
    if (url === null || supplierName === null) {
        return null
    }

    return (
        <div className="text-xs font-normal">
            See Material: <a
                href={`${url}?utm_source=marchmaterials.com&utm_medium=MARCH_material_search_for_architects`}
                rel="noopener noreferrer"
                target="_blank"
                style={{ "color": "#109F00" }}
                className="inline-flex items-center gap-1"
            >
                {supplierName}<span><SquareArrowOutUpRight color="#109F00" size={14} strokeWidth={1.5} /></span>
            </a>
        </div>
    )
}


function MaterialCollapseItem({ projectMaterial }: Readonly<{
    projectMaterial: EnrichedProjectMaterial,
}>) {
    const certificationTags = projectMaterial.material.certifications.map((c) => <Tag key={c}>{c}</Tag>);
    const imageTags = projectMaterial.material.tags.join(", ")

    const [hidden, setHidden] = useState(true)
    const url = projectMaterial.material.url
    const supplierName = projectMaterial.material.supplier.name
    return (
        <div className="border-b-[1px] last:border-b-0">
            <div className={`grid grid-cols-[15%_1fr] grid-rows-[1fr_30%] bg-gray-50 py-2 overflow-hidden`} onClick={() => setHidden(!hidden)}>
                <div className="flex justify-center items-center mx-1">
                    <div className="rounded-lg p-1 font-semibold text-xs bg-gray-200">
                        {projectMaterial.percentage}%
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-xs font-semibold">{projectMaterial.material.name}</div>
                    <button className="mr-2" ><ChevronDown className={`transition-transform duration-300 ${hidden ? "rotate-180" : "rotate-0"
                        }`} /></button>

                </div>
                <div className="col-start-2">
                    <MaterialLink url={url} supplierName={supplierName} />
                </div>
            </div>
            <div className={`transition-[max-height,opacity] duration-500 overflow-hidden  ${hidden ? "max-h-0 opacity-0" : "max-h-40 opacity-100"
                }`}>
                <div className="m-2">
                    <h6 className="text-xs font-semibold mb-1">Where it is used:</h6>
                    <p className="mb-2 text-sm font-light">{projectMaterial.usedWhere}</p>
                    <h6 className="text-xs font-semibold mb-1">Material Categories:</h6>
                    <div className="flex flex-wrap">
                        <p className="mb-2 text-sm font-light">{imageTags}</p>
                    </div>
                    {certificationTags}

                </div>
            </div>
        </div>
    )
}

export default function MaterialCollapse({ projectMaterials }: { projectMaterials: EnrichedProjectMaterials }) {
    return (<div className="border-solid border border-[#e5e7eb] rounded-lg overflow-hidden">
        {projectMaterials.map(p => (<MaterialCollapseItem projectMaterial={p} key={p.id} />))}
    </div>)

}