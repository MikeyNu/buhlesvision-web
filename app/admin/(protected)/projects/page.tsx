import { ProjectEditor } from "@/components/admin/project-editor";
import { getProjects } from "@/lib/data/projects";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
          CMS
        </p>
        <h2 className="text-3xl font-extrabold uppercase tracking-tighter">
          Portfolio Projects
        </h2>
      </div>
      <ProjectEditor projects={projects} />
    </div>
  );
}

