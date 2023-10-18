import { url } from 'inspector';
import KeycloakConnect from 'keycloak-connect';
import session from 'express-session';

export const memoryStore = new session.MemoryStore();

const config: KeycloakConnect.KeycloakConfig = {
    realm: 'my-realm',
    'auth-server-url': 'http://localhost:8080/auth/',
    resource: 'express-web',
    'ssl-required': 'external',
    'confidential-port': 0
};

const keycloak = new KeycloakConnect({ store: memoryStore }, config);

export default keycloak;