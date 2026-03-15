import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { updateInquiryStatus } from "@/lib/actions/inquiries";
import { getInquiries } from "@/lib/data/inquiries";

export default async function AdminInquiriesPage() {
  const inquiries = await getInquiries();

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
          CRM
        </p>
        <h2 className="text-3xl font-extrabold uppercase tracking-tighter">
          Inquiries
        </h2>
      </div>

      <div className="rounded-xl border border-stone-800 bg-background-dark p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inquiries.length === 0 ? (
              <TableRow>
                <TableCell className="text-stone-500" colSpan={5}>
                  No inquiries found. Contact submissions will appear here.
                </TableCell>
              </TableRow>
            ) : (
              inquiries.map((inquiry) => (
                <TableRow key={inquiry.id}>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="font-semibold">{inquiry.fullName}</p>
                      {inquiry.companyName ? (
                        <p className="text-xs text-stone-500">{inquiry.companyName}</p>
                      ) : null}
                    </div>
                  </TableCell>
                  <TableCell>{inquiry.inquiryType}</TableCell>
                  <TableCell>{inquiry.sourcePage}</TableCell>
                  <TableCell>
                    <form action={updateInquiryStatus} className="flex items-center gap-2">
                      <input name="id" type="hidden" value={inquiry.id} />
                      <select
                        className="rounded border border-stone-700 bg-background-deep px-2 py-1 text-xs uppercase tracking-widest text-stone-200"
                        defaultValue={inquiry.status}
                        name="status"
                      >
                        <option value="new">new</option>
                        <option value="in_review">in_review</option>
                        <option value="responded">responded</option>
                        <option value="closed">closed</option>
                      </select>
                      <button
                        className="rounded border border-primary/60 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary"
                        type="submit"
                      >
                        Save
                      </button>
                    </form>
                    <Badge className="mt-2" variant="muted">
                      {inquiry.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-stone-400">
                    {new Date(inquiry.createdAt).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

