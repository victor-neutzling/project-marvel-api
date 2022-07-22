import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Md5 } from 'ts-md5/dist/md5';
import { tap, map, pluck, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private publicKey = '245278f9d719252e3a436f60bdad04a1';
  private privateKey = '07e7bb9d29ea70bc9c22b642fd5888922422d616';

  constructor(private http: HttpClient) {}

  private generateHash(timeString: string): string {
    const md5 = new Md5();
    return md5
      .appendStr(timeString)
      .appendStr(this.privateKey)
      .appendStr(this.publicKey)
      .end() as string;
  }

  public getCharacters(name:string, offset: number): Observable<any> {
    const timeString = new Date().getTime().toString();

    return this.http
      .get(
        `http://gateway.marvel.com/v1/public/characters?ts=${timeString}&apikey=${
          this.publicKey
        }&hash=${this.generateHash(timeString)}&nameStartsWith=${name}&offset=${offset}`
      )
      .pipe(map((data: any) => data.data.results));
  }
  public getCharactersBySeriesId(ID:string, offset: number): Observable<any> {
    const timeString = new Date().getTime().toString();

    return this.http
      .get(
        `http://gateway.marvel.com//v1/public/series/${ID}/characters?ts=${timeString}&apikey=${
          this.publicKey
        }&hash=${this.generateHash(timeString)}&offset=${offset}`
      )
      .pipe(map((data: any) => data.data.results));
  }
  public getComic(name:string, offset: number): Observable<any> {
    const timeString = new Date().getTime().toString();

    return this.http
      .get(
        `http://gateway.marvel.com//v1/public/comics?ts=${timeString}&apikey=${
          this.publicKey
        }&hash=${this.generateHash(timeString)}&titleStartsWith=${name}&offset=${offset}`
      )
      .pipe(
        map((data: any) => data.data.results));
  }
  public getSeries(name:string, offset: number): Observable<any> {
    const timeString = new Date().getTime().toString();

    return this.http
      .get(
        `http://gateway.marvel.com//v1/public/series?ts=${timeString}&apikey=${
          this.publicKey
        }&hash=${this.generateHash(timeString)}&titleStartsWith=${name}&offset=${offset}`
      )
      .pipe(
        map((data: any) => data.data.results));
  }
}
