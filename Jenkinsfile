pipeline {
  agent { label 'agent-app' }
  stages {
    stage('copying') {
      steps {
        sshagent(['agent-key']) {
          sh '''
            scp -o StrictHostKeyChecking=no $(WORKSPACE)/* ubuntu@44.204.135.197:/home/ubuntu/$(JOB_NAME)
          '''
        }
      }
    }
    stage('build') {
      steps {
        sshagent(['agent-key']){
           sh '''
            ssh -o StrictHostKeyChecking=no ubuntu@44.204.135.197
            docker ps -aq | xargs -r docker rm || true
            docker compose down --remove-orphans || true
          '''
        }
       
      }
    }
    stage('deploy') {
      steps {
        sshagent(['agent-key']){
           sh '''
            ssh -o StrictHostKeyChecking=no ubuntu@44.204.135.197
            DOCKER_BUILDKIT=1 docker compose build --progress=plain
          '''
        }
       
      }
    }
  }
}
