pipeline {
    agent any

    tools {
        nodejs 'NodeV18' // Matches the NodeJS installation name in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                git branch: 'main', url: 'https://github.com/Bernadeta998/faraday.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                sh 'npm install' // Install local dependencies
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running Mocha, Chai, and Supertest tests...'
                sh 'npm run getOperator' // Ensure your package.json has a test script configured
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
        success {
            echo 'Tests completed successfully!'
        }
        failure {
            echo 'Tests failed. Check logs for details.'
        }
    }
}
