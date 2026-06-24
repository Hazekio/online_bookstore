import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
   state: () => {
        const users= {
            0:{
                id: 1,
                firstname: "Robert",
                lastname: "Ochiel",
                email:"robert@example.com",
                phone:"0754628134",
                location: "Langata",
                address:"Langata Rd",
            },
            1:{
                id: 2,
                firstname: "Hailey",
                lastname: "Kioko",
                email:"hailey@example.com",
                phone:"0712345679",
                location: "Karen",
                address:"Ndege Rd",
            },
            2:{
                id: 3,
                firstname: "Linda",
                lastname: "Mumbua",
                email:"linda@example.com",
                phone:"0723456789",
                location: "Lavington",
                address:"Gitanga Rd",
            },
            3:{
                id: 4,
                firstname: "Macey",
                lastname: "Wanjira",
                email:"macey@example.com",
                phone:"0734567891",
                location: "Kilimani",
                address:"Mountain Rd",
            },
            4:{
                id: 5,
                firstname: "Naka",
                lastname: "Mukasa",
                email:"naka@example.com",
                phone:"0745678912",
                location: "Kileleshwa",
                address:"Kileleshwa Rd",
            },
            5:{
                id: 6,
                firstname: "Tara",
                lastname: "Billy",
                email:"Tara@example.com",
                phone:"0756789123",
                location: "Westlands",
                address:"Waiyaki Way",
            },
        }

        return{
            users
        }
   },
   actions:{
      
   },
   persist: true,
})