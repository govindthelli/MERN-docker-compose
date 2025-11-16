pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh '''
            
            docker compose down --remove--orphans || true
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
