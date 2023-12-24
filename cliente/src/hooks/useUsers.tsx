    import {useState, useEffect} from 'react'
    import {IUser} from '../interfaces'

    export const  useUsers = () => {

        const [users, setUsers] = useState<IUser[]|[]>([])


        let fetchUser = () =>{

            fetch("")
        }

        return {}
    }