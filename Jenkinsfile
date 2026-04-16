pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }
stage('DEBUG FILES') {
    steps {
        bat 'dir'
    }
}

        stage('Run Docker Compose') {
            steps {
                bat 'docker compose up --build'
            }
        }
    }

    post {
        always {
            echo 'Publishing HTML Report...'

            publishHTML(target: [
                reportName: 'Playwright Report',
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: true
            ])
        }
    }
}