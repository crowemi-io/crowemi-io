import {APIHost} from "../ui/Common"
import {GetGCPToken} from "../ts-utils/google/GoogleAuthentication";

export const dynamic = 'force-dynamic'

type health = {
    status_code: number
    status: string
    error: any
}
async function apiHealth() : Promise<string> {
    'use server'
    return await GetGCPToken(`${APIHost}/v1/health`, APIHost ? APIHost : "")
}
export default async function Health() {
    var health = await apiHealth().then((res) => {
        return JSON.parse(res) as health;
    }).catch((error) => {
        console.error("Error checking health:", error)
        var ret: health = {
            status: "failure",
            status_code: 0,
            error: error
        }
        return ret;
    })
    return (
        <div>
            <p>status: {health.status}</p>
            <p>error: {health.error}</p>
        </div>
    )
}