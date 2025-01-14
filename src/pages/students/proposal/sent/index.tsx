import { Main } from '@/components/layout/main';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ProposalSentTable } from '@/features/proposals/components/proposal-sent-table';

export function ProposalSent() {
  return (
    <>
      <Main fixed>
        <ScrollArea>
          <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Proposal Sent List</h2>
              <p className="text-muted-foreground">Find all the Proposal Sent you have made</p>
            </div>
          </div>
          <div className="mr-4 flex-1 overflow-auto py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
            <ProposalSentTable />
          </div>
        </ScrollArea>
      </Main>
    </>
  );
}
