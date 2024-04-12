import {APIHost} from "../ui/Common"
import {GetGCPToken} from "../ts-utils/google/GoogleAuthentication";


type health = {
    status_code: number
    status: string
}
async function apiHealth() : Promise<string> {
    'use server'
    return await GetGCPToken("https://crowemi-io-api-k5rjgoqtkq-uw.a.run.app/v1/health", "https://crowemi-io-api-k5rjgoqtkq-uw.a.run.app")
}
export default async function Health() {
    var health = await apiHealth().then((res) => {
        return JSON.parse(res) as health;
    }).catch((error) => {
        console.error("Error checking health:", error)
        var ret: health = {
            status: "failure",
            status_code: 0
        }
        return ret;
    })
    return (
        <div>
            {health.status}
        </div>
    )
}