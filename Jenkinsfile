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

         stage('Copy ENV') {
            steps {
                script {
                    def envContent = '''
                    HOST=https://morbius-sandbox.bdn.id
                    HORUS_HOST=https://api.sandbox.herra.id
                    usernameInternal=internal
                    passwordInternal=123456
                    usernameHorus=horus
                    passwordHorus=MyHorus123456
                    productData=XLSIT200MB
                    TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjM3MDg1MDcsImlkIjoxLCJtZXJjaGFudF9pZCI6MCwicm9sZV9pZCI6MSwidXNlcm5hbWUiOiJpbnRlcm5hbCJ9.gz4aUTU3EVQDXeQ6Hn8c960xYsPAM6CN6r1k6d29FoM
                    '''
                    writeFile file: '.env', text: envContent.trim()
                }
                echo "Created .env file with content:"
                sh 'cat .env'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running Mocha, Chai, and Supertest tests...'
                sh 'npm run testAnonym' // Ensure your package.json has a test script configured
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
