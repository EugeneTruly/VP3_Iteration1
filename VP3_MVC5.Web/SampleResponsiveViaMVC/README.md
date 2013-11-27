VP3_Corporate_Site
==================

Home of our ASP.NET corporate/marketing website

MVC4/Razor/Bootstrap

Setup Instructions:
-------------
1) Install Web Workbench (Enables less & coffeescript for bundles)
   http://visualstudiogallery.msdn.microsoft.com/2b96d16a-c986-4501-8f97-8008f9db141a

2) IIS Configuration:
   Create a Website pointing to C:\Projects\VP3_Corporate_Site\VP3_Corporate_Site, 
      * make sure its Application Pool has 'Managed Pipeline Mode = Integrated'

3) Notes on VS.NET
   Since this project uses a local IIS Web, you must start VS.NET as Administrator (best to set this as an Advanced property on menu shortcut).
    The above also then allows the option to Debug.


Notes on Less:
 1) files of .less extension, need to have their property for Build Action set to Content or they will not be published to other servers!

Notes on Font folder;
 All files in the Content/Font folder need to have their property for Build Action set to Content or they will not be published to other servers!



Testing URLs:

  Local      :  http://localhost:81
  Staging    :  http://staging.viewpaths.com:81      ! Note port 81 as a temporary, once we bring down DNN, these will be switched around
  Production :


