import {inject} from 'aurelia-framework';
import {PartyListStandingRepository} from 'components/party-list-standing/PartyListStandingRepository';

@inject(PartyListStandingRepository)
export class PartyListStandingService {
    
    constructor(repository) {
        this.repository = repository;
    }
    
    getLatestStanding(electionId) {
        return this.repository
                   .getLatestStanding(electionId);
    }
}