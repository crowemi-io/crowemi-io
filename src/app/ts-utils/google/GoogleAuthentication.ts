const {GoogleAuth} = require('google-auth-library');
const auth = new GoogleAuth();

export async function GetGCPToken(url: string, targetAudience: string) {
    console.info(`request ${url} with target audience ${targetAudience}`);
    const client = await auth.getIdTokenClient(targetAudience);

    const res = await client.request({url}).catch((err: Error) => {
        console.error(err.message);
        process.exitCode = 1;
    });
    console.info(res.data);
    return res.data;
}

