import {APIHost} from "../ui/Common"

async function apiHealth() {
    try {
        const response = await fetch(APIHost + "/v1/health/");
        const text = await response.text();
        console.log(text);
        return text;
    } catch (error) {
        console.error(error);
        return "failed";
    }
}
export default function Health() {
    return (
        <div>
            {apiHealth()}
        </div>
    )
}