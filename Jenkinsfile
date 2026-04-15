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
            echo 'DEBUG: listing report folder'
            bat 'dir playwright-report'

            echo 'Publishing HTML Report...'

            publishHTML(target: [
                reportName: 'Playwright HTML Report',
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: false
            ])
        }
    }
}