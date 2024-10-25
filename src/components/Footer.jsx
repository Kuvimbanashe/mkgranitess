const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} MK Granites. All rights reserved.</p>
        <h2>Created by <a href="https://www.facebook.com/profile.php?id=61558498095335" className="underline">Clarity Smarttech</a></h2>

      </div>
    </footer>
  )
}

export default Footer
