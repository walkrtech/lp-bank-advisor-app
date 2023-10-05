import { AcceptRequestInterface } from "../interfaces/request/accept-request.interface";
import { RequestFirstAccessRequestInterface } from "../interfaces/request/request-first-access-request.interface";
import { RequestFirstAccessResponseInterface } from "../interfaces/request/request-first-access-response.interface";
import { ResponseInterface } from "../interfaces/response.interface";
import { BaseService } from "./base.service";

class RequestService extends BaseService {
    async register(
        req: RequestFirstAccessRequestInterface
    ): Promise<RequestFirstAccessResponseInterface> {
        const response = await this.apiAdvisor.post<ResponseInterface>(
            "/request/request-first-access",
            req
        );
        return this.extractData<RequestFirstAccessResponseInterface>(response);
    }

    async acceptRequest(
        req: AcceptRequestInterface
    ): Promise<AcceptRequestInterface> {
        const response = await this.apiAdvisor.post<ResponseInterface>(
            "/request/accept-request",
            req
        );
        return this.extractData<AcceptRequestInterface>(response);
    }
}
const requestService = new RequestService();
export default requestService;
