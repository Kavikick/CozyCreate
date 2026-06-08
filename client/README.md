# The client zip

The contents of this folder are for being zipped up and distributed. 

## Creating a MultiMC instance for your modpack
#### Copied from https://packwiz.infra.link/tutorials/installing/packwiz-installer/

To distribute the modpack as a MultiMC instance:

Create a barebones MultiMC instance, with the modloader and Minecraft version you want (memory allocation overrides are also a good idea)
Download packwiz-installer-bootstrap from https://github.com/packwiz/packwiz-installer-bootstrap/releases and place it in the instance Minecraft folder
Info

This is the same folder as options.txt - MultiMC will call it .minecraft or minecraft depending on your system.

Go to Edit Instance -> Settings -> Custom commands, then check the Custom Commands box and paste the following command into the pre-launch command field:
"$INST_JAVA" -jar packwiz-installer-bootstrap.jar https://[your-server]/pack.toml (where https://[your-server]/pack.toml is the HTTP URL your pack.toml file is hosted at)
Use the Export Instance function to export your pack as a .zip file (which can be distributed similarly to your pack via a web hosting service)
To install your pack, users just need to add it with Add instance -> Import from zip - then packwiz-installer does the rest, keeping it up to date every time the game is launched!