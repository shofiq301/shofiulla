// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animated background with coding lines
function createBackgroundAnimation() {
  const bgAnimation = document.getElementById('bgAnimation');
  const codeSnippets = [
    'func fetchUserData() {',
    '  guard let url = URL(string: apiEndpoint) else { return }',
    '  URLSession.shared.dataTask(with: url) { data, response, error in',
    '    DispatchQueue.main.async {',
    '      self.updateUI(with: data)',
    '    }',
    '  }.resume()',
    '}',
    '',
    'class UserProfile: ObservableObject {',
    '  @Published var user: User?',
    '  @Published var isLoading = false',
    '}',
    '',
    '@State private var selectedTab = 0',
    '@State private var showingDetail = false',
    '',
    'override func viewDidLoad() {',
    '  super.viewDidLoad()',
    '  setupConstraints()',
    '  configureNavigationBar()',
    '}',
    '',
    'private func animateTransition() {',
    '  UIView.animate(withDuration: 0.3) {',
    '    self.view.alpha = 1.0',
    '    self.view.transform = .identity',
    '  }',
    '}',
    '',
    'struct ContentView: View {',
    '  var body: some View {',
    '    NavigationView {',
    '      VStack {',
    '        // Content here',
    '      }',
    '    }',
    '  }',
    '}',
    '',
    'import SwiftUI',
    'import Combine',
    'import CoreData',
    '',
    'let apiManager = APIManager.shared',
    'let database = CoreDataManager()',
    '',
    'func setupNetworking() {',
    '  // Configure URLSession',
    '  // Setup interceptors',
    '}',
    '',
    'private func handleResponse<T>(',
    '  _ result: Result<T, Error>',
    ') {',
    '  switch result {',
    '  case .success(let data):',
    '    print("Success: \\(data)")',
    '  case .failure(let error):',
    '    print("Error: \\(error)")',
    '  }',
    '}'
  ];

  function createCodeLine(text, delay = 0) {
    const line = document.createElement('div');
    line.className = 'code-lines';
    line.textContent = text;
    
    // Random positioning
    line.style.left = Math.random() * (window.innerWidth - 500) + 'px';
    line.style.top = Math.random() * window.innerHeight + 'px';
    line.style.animationDelay = delay + 's';
    
    // Fade in animation
    line.style.opacity = '0';
    line.style.animation = 'slideInUp 2s ease-out forwards';
    
    bgAnimation.appendChild(line);
    
    // Remove after animation
    setTimeout(() => {
      if (line.parentNode) {
        line.remove();
      }
    }, 8000);
  }

  // Create typing cursor effect
  function createTypingCursor() {
    const cursor = document.createElement('div');
    cursor.className =

