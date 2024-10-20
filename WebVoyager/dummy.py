from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

chrome_options = Options()
chrome_options.add_argument("--no-sandbox")  # Overcome limited resource problems
chrome_options.add_argument("--disable-dev-shm-usage")  # Overcome shared memory issues
chrome_options.add_argument("--remote-debugging-port=9225")
# chrome_options.add_argument("--headless=new")  # Optional: Run in headless mode (no UI)

executable_path = ChromeDriverManager().install()
driver = webdriver.Chrome(service=Service(executable_path), options=chrome_options)
driver.get("http://www.google.com")
