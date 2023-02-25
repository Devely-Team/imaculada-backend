import { AsyncResult } from "../../../../core/tools/result_type";
import { Campaign } from "../../domain/model/campaign";

interface CampaignReposity {
  create(account: Campaign): AsyncResult<string>;
  listAll(): AsyncResult<Campaign[]>;
  findById(id: string): AsyncResult<Campaign>;
  findByTitle(title: string): AsyncResult<Campaign>;
  update(account: Campaign): AsyncResult<boolean>;
  delete(id: string): AsyncResult<boolean>;
}

export { CampaignReposity };
