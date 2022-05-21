Install dependencies:
    npm i

Install Browser Sync and Nodemon:
    npm i browser-sync -g
    npm install nodemon -g

NPM scripts:
    run npm dev

Nodemon localhost address: http://localhost:3000/

Local Docker commands:

    cd dist

    Build Docker image:
        docker build -t johnjamison/mailer .

    Run Docker container (on port 3030):
        docker run -p 3030:3030 -e "PORT=3030" -e "SG_API_KEY=SG._XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" johnjamison/mailer

    Push to Docker Hub:
        docker push johnjamison/mailer

Docker server-side commands:

    Destroy everything:
        docker container rm -f $(docker ps -aq)

    Pull the latest image:
        docker pull johnjamison/mailer

    Run the image on port 443 for HTPPS. Evirmental varriables will have to be filled. Try using the constructor on /constructor to make the run command:
        docker run -p 443:443 -e "PORT=443" -e "FROM_EMAIL=" -e "API_KEY=" -e "SSL_CRT=" -e "SSL_KEY=" johnjamison/mailer

Services used:
https://sendgrid.com/
https://www.ssls.com/
https://www.digitalocean.com/

Tutorials and guides:
https://regbrain.com/article/nunjucks-express-app
https://www.smashingmagazine.com/2020/04/express-api-backend-project-postgresql/
https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters
https://vsupalov.com/docker-arg-env-variable-guide/
https://compiledsuccessfully.dev/git-skip-worktree/
https://timonweb.com/javascript/running-expressjs-server-over-https/
https://linuxize.com/post/creating-a-self-signed-ssl-certificate/
https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose

https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation // TODO better form validation

Aesthetic:
https://draculatheme.com/contribute
https://www.gradientmagic.com/