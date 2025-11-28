import { emit } from "../../../../../shared/lib/eventBus.js";
import { login } from "../../login/js/login.js";
import { requestLogout } from "../../../../../shared/lib/api/user-api.js";
import { clearPathHistory } from "../../../../../shared/lib/router.js";
import { accessTokenStore } from "../../../../../shared/lib/jwt/access-token.js";

export async function logout() {
    requestLogout();
    localStorage.clear();
    clearPathHistory();
    accessTokenStore.clear();
    emit('user:logout', {});
    return login();

}