# CozyCreate
## Installation
1. Clone repo
2. Copy .env.example to .env
3. Modify .env to your environment
4. Docker compose up

## Developing
### Environment setup
1. install packwiz https://packwiz.infra.link/installation/
2. copy and modify .env.example to .env, and docker-compose.override.example.yml to docker-compose.override.yml
3. Download the latest release from github and make a new instance
4. Change the pre-launch command to point to `http://127.0.0.1:8080/pack.toml`
5. Name it something memorable and verify it launches without errors
6. run `openssl rand -base64 128 > rcon-password.txt` to generate a rcon-password for the docker containers
7. run `./validate.sh` and download any mods that it tells you to to ./data/mods because some can't be automatically downloaded by packwiz
8. Validate the server passes

#### Troubleshooting
If installing the go package and then calling packwiz doesn't work try adding the bin subdirectory to your path. See https://wiki.archlinux.org/title/Go#Install_directory for more details.

### To install a mod
0. Run `packwiz serve`
1. Use packwiz to add the mod you want
2. Modify the .toml to include it to either server/client/both 
4. Run Validate.sh if you're installing something serverside to validate the server
5. Spin up a minecraft instance and make a single player world to validate the client