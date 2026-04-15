pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'call npm install'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'call npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'call npx playwright test'
            }
        }
    }

    post {
        always {
            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
    }
}