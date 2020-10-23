import { IPortalSync } from './../../interfaces/responses/PortalSync';
import * as fromRoot from '../../../../../../core/state/app.state';

interface State extends fromRoot.State {
    user: IPortalSync;
}

export { State as IAppUserState };
