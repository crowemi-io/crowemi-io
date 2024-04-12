import {APIHost} from "../ui/Common"
import {GetGCPToken} from "../ts-utils/google/GoogleAuthentication";

// forces route to render dynamically so build doesn't fail when the API host/creds are unreachable
export const dynamic = 'force-dynamic'

type health = {
    status_code: number
    status: string
    error: string
}
async function apiHealth() : Promise<string> {
    'use server'
    const host: string = APIHost ? APIHost : "https://crowemi-io-api-k5rjgoqtkq-uw.a.run.app/"
    return await GetGCPToken(`${host}/v1/health`, host)
}
export default async function Health() {
    var health = await apiHealth().then((res) => {
        return JSON.parse(res) as health;
    }).catch((error) => {
        console.error("Error checking health:", error)
        var ret: health = {
            status: error.message,
            status_code: 0,
            error: error.stack
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