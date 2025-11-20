pipeline {
  agent { label 'agent-label' }

  stages {
    stage('copying') {
      steps {
        sshagent(['ssh-agent']) {
          sh '''
            
            scp -r $WORKSPACE/* ubuntu@44.193.202.227:/home/ubuntu/$JOB_NAME/
          '''
        }
      }
    }

    stage('build') {
      steps {
        sshagent(['ssh-agent']) {
          sh '''
            ssh ubuntu@44.193.202.227 "
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
        sshagent(['ssh-agent']) {
          sh '''
            ssh ubuntu@44.193.202.227 "
              cd /home/ubuntu/$JOB_NAME;
              DOCKER_BUILDKIT=1 docker compose up --build -d;
            "
          '''
        }
      }
    }
  }
}
