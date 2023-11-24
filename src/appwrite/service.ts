import {ID,Account,Client} from 'appwrite'
import Config from 'react-native-config'

import Snackbar from 'react-native-snackbar'
 
const appwriteClient = new Client()

const APPWRITE_ENDPOINT : string = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID : string = Config.APPWRITE_PROJECT_ID!;

type CreatUserAccount = {
    email :string;
    password: string;
    name: string;
}

type LoginUserAccount = {
    email :string;
    password: string;
  }

  class AppwriteService{
    account;

    constructor(){
        appwriteClient
        .setEndpoint(APPWRITE_ENDPOINT)
        .setProject(APPWRITE_PROJECT_ID)

        this.account = new Account(appwriteClient)
    }
//create a new account

    async createAccount({email, password, name}:CreatUserAccount){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
                )
                if (userAccount){
                    //TODO: create login feature
                    return this.login({email, password})
                }
                else{
                    return userAccount
                }
            
        } catch (error) {
            Snackbar.show({
                text : String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log("Appwrite Service :: creactingAccount() :: " + error)
        }
    }


  async login({email,password}: LoginUserAccount){
    try {
        return await this.account.createEmailSession(email,password)  
        
    } catch (error){
        Snackbar.show({
            text : String(error),
            duration: Snackbar.LENGTH_LONG
        })
        console.log("Appwrite Service :: loginAccount() :: " + error)
    }

  }

  async getCurrentUser(){
    try {
        return await this.account.get()
        
    } catch (error) {

        console.log("Appwrite Service :: getCurrentUser() :: " + error)
    }
  }

  async logout(){

    try {
        return await this.account.deleteSession('current')
        
    } catch (error) {

        console.log("Appwrite Service :: logout() :: " + error)
    }
  }


  }
  export default AppwriteService
