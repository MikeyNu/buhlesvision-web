import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getInquiries } from "@/lib/data/inquiries";
import { getProjects } from "@/lib/data/projects";

export default async function AdminDashboardPage() {
  const [projects, inquiries] = await Promise.all([getProjects(), getInquiries()]);

  const newInquiries = inquiries.filter((inquiry) => inquiry.status === "new").length;
  const caseStudies = projects.filter((project) => project.isCaseStudy).length;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Total Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-black text-primary">{projects.length}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Case Studies</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-black text-primary">{caseStudies}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>New Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-black text-primary">{newInquiries}</p>
        </CardContent>
      </Card>
    </div>
  );
}

