pipeline {
    agent { label 'Linux' }
    environment {
        DOCKERHUB_CREDENTIALS=credentials('24a2324f-da2d-4294-9178-166c5f2819f1')
   }
    stages {
        stage('checkout') {
            steps {
                git branch: 'main', credentialsId: '3e732f4e-44b9-4b62-95ce-a5a4a068a9c6', url: 'https://github.com/sasidharanshanmugam/mytask.git'
                echo 'git checkout completed'
            }
        }
        stage('Docker Build'){
            steps{ 
                sh "docker build -t samplenodejsapplication:0.0.${env.BUILD_ID} ." 
            }
        }
        stage('deploy and push to Dockerregistery'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                echo 'Docker login succeed'
                sh "docker tag samplenodejsapplication:0.0.${env.BUILD_ID} sasidharans/dockerjenkins:0.0.${env.BUILD_ID}"
                sh "docker run -dp 3000:3000 sasidharans/dockerjenkins:0.0.${env.BUILD_ID}"
                sh "docker push sasidharans/dockerjenkins:0.0.${env.BUILD_ID}" 
             }
        }
        stage('send notification to slack'){
            steps{
                slackSend botUser: true, channel: 'D063BALT2G0', message: 'job completed', tokenCredentialId: 'slackcred'
            }
        }
            
    }
}
