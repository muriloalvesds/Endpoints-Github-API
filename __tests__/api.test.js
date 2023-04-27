const axios = require('axios');
const app = require('../index');
const port = 6001;

describe('GitHub API', () => {    
    it('should list users', async () => {
        const response = await axios.get(`http://localhost:${port}/api/users`);
        expect(response.status).toBe(200);
        expect(response.data.users.length).toBeGreaterThan(0);
        expect(response.data.nextLink).toBeDefined();
    });

    it('should get user details', async () => {
        const response = await axios.get(`http://localhost:${port}/api/users/octocat/details`);
        expect(response.status).toBe(200);
        expect(response.data.id).toBeDefined();
        expect(response.data.login).toBe('octocat');
        expect(response.data.html_url).toBeDefined();
        expect(response.data.created_at).toBeDefined();
    });

    it('should list user repositories', async () => {
        const response = await axios.get(`http://localhost:${port}/api/users/muriloalvesds/repos`);
        expect(response.status).toBe(200);
        expect(response.data.repositories.length).toBeGreaterThan(0);
        
    });

});