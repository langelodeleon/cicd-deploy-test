# deploy-cicd
Steps to run your application
1. clone the project
2. RUN cd deploy-cicd
3. RUN npm ci
4. RUN npm start
5. RUN npm test to run unit tests.

Instructions:
1. Use any cloud infrastructure. In my case, I am using AWS Free Tier.
2. Create Jenkins instance.
Specs:
- Amazon Linux 2
- t2.micro
- Allow 22 and 8080 Inbound Anywhere
- Create RSA keypair
3. Access Jenkins instance through SSH then follow the steps in https://pkg.jenkins.io/redhat-stable/.
4. Create Docker instance.
- Amazon Linux 2
- t2.micro
- Allow 22 and 8080 Inbound Anywhere
- Use the same RSA keypair
5. Access Docker instance through SSH then yum install docker git -y
6. Add personal access token in GitHub if MFA is enabled in your account
7. Clone the repo. git clone https://username@github.com/username/repo_name Or create a new repo from cloned repo.
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/langelodeleon/cicd-deploy-test.git
- git push -u origin main
8. Install nodejs inside Docker host and try to start the application
Troubleshooting:
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
touch /root/nodejs/cicd-deploy-test/.foreverignore
9. Create Dockerfile
10. Create dockeradmin user and add it to docker group. This user will be used to integrate Docker with Jenkins.
11. Integrate Docker to Jenkins
