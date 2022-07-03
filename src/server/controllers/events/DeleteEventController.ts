import { ControllerBase } from '../concerns/ControllerBase';
import { restRequestMethod } from '@/server/lib/RESTRequestMethod';
import { respondSuccess } from '@/server/lib/respondSuccess';
import { getQuery } from '@/server/lib/getQuery';
import { NextApiHandler } from 'next';
import type { IDeleteEventService } from '@/server/services/events/DeleteEventService';

export class DeleteEventController extends ControllerBase<IDeleteEventService> {
  method = restRequestMethod.delete;

  handle: NextApiHandler = async (req, res) => {
    const id = getQuery(req, 'id');

    await this.service.execute(id);

    respondSuccess({
      res,
      data: {
        message: 'deleted',
      },
    });
  };
}
