/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiURL } from '@/constants/api.constant';
import { BaseService } from '../base.service';
import { IProposal } from './proposal.model';

export class ProposalService extends BaseService {
  private static _instance: ProposalService;

  public static getInstance(): ProposalService {
    return this._instance || (this._instance = new this());
  }

  createProposal(data: any): Promise<IProposal> {
    const url = ApiURL.CREATE_PROPOSAL;
    return this.post(url, data);
  }

  getAllMineProposals({ page, limit, sort, filter }: any): Promise<IProposal> {
    const url = ApiURL.GET_SENT_PROPOSALS({ page, limit, sort, filter });
    return this.get(url);
  }

  getAllRecievedProposals({ page, limit, sort, filter }: any): Promise<IProposal> {
    const url = ApiURL.GET_RECIEVED_PROPOSALS({ page, limit, sort, filter });
    return this.get(url);
  }

  getProposalById(id: string): Promise<IProposal> {
    const url = ApiURL.GET_PROPOSAL_BY_ID(id);
    return this.get(url);
  }

  updateProposalById(id: string, data: any): Promise<IProposal> {
    const url = ApiURL.GET_PROPOSAL_BY_ID(id);
    return this.patch(url, data);
  }

  deleteProposalById(id: string): Promise<IProposal> {
    const url = ApiURL.DELETE_PROPOSAL(id);
    return this.delete(url);
  }
}
