pipeline {
  agent { label 'agent-app' }

  stages {
    stage('copying') {
      steps {
        sshagent(['agent-key']) {
          sh '''
            
            scp -r $WORKSPACE/* ubuntu@44.204.135.197:/home/ubuntu/$JOB_NAME/
          '''
        }
      }
    }

    stage('build') {
      steps {
        sshagent(['agent-key']) {
          sh '''
            ssh ubuntu@44.204.135.197 "
              cd /home/ubuntu/$JOB_NAME;
              docker ps -aq | xargs -r docker rm || true;
              docker compose down --remove-orphans || true;
            "
          '''
        }
      }
    }

    stage('deploy') {
      steps {
        sshagent(['agent-key']) {
          sh '''
            ssh ubuntu@44.204.135.197 "
              cd /home/ubuntu/$JOB_NAME;
              DOCKER_BUILDKIT=1 docker compose up --build -d;
            "
          '''
        }
      }
    }
  }
}
