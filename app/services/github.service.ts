import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private  username; //Github Username

  constructor(private _http:Http){
    this.username = 'treisy';
  }

  // Get user Profile Info
  getUser(){
    return this._http.get('https://api.github.com/users/'+this.username).map(res => res.json());
  }


  // Get User repos
  getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos').map(res => res.json());
  }

  // Update Username
  updateUser(username){
    this.username = username;
  }
}
