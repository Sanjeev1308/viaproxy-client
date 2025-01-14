import { z } from 'zod';

const proposalSchema = z.object({
  _id: z.string(),
  message: z.string(),
  proposer: z.any(),
  status: z.string(),
});
export type Proposal = z.infer<typeof proposalSchema>;

export const serviceListSchema = z.array(proposalSchema);

export const filterFields = [
  {
    label: 'Message',
    value: 'message',
    placeholder: 'Search by message...',
  },
];
