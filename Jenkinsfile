pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh '''
            docker rmi -f $(docker images -aq) || true
            docker rm -f $(docker ps -aq) || true
            docker compose down || true
          '''
      }
    }
    stage('deploy') {
      steps {
        sh '''
            docker compose up --build 
          '''
      }
    }
  }
}
