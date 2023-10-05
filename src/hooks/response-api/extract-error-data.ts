export function extractErrorData(err: any) {
    return err.response.data.errors[0];
}