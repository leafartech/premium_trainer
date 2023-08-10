import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Agenda = () => {
    const [access, setAccess] = useState<boolean>(false)
    const router = useRouter()

    let auth: string | null = ''
    if (typeof window !== 'undefined') {
        auth = localStorage.getItem('train-system')
    }

    if (auth === null) {
        router.push('/login-adm')
    } else {
        useEffect(() => {
            setAccess(true)
        }, [])
    }

    return <>
        {access && (
            <div>
                <span className="text-white">OK</span>
            </div>
        )}
    </>
}

export default Agenda