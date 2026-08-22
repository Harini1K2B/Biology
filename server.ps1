$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()
Write-Output "Server running at http://localhost:8080/"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $req = $context.Request
    $res = $context.Response
    
    $localPath = $req.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrWhiteSpace($localPath)) {
        $localPath = "index.html"
    }
    
    $fullPath = Join-Path "D:\Biology" $localPath
    if (Test-Path $fullPath -PathType Leaf) {
        $bytes = [System.IO.File]::ReadAllBytes($fullPath)
        if ($fullPath.EndsWith(".html")) { $res.ContentType = "text/html" }
        elseif ($fullPath.EndsWith(".css")) { $res.ContentType = "text/css" }
        elseif ($fullPath.EndsWith(".js")) { $res.ContentType = "application/javascript" }
        elseif ($fullPath.EndsWith(".json")) { $res.ContentType = "application/json" }
        elseif ($fullPath.EndsWith(".svg")) { $res.ContentType = "image/svg+xml" }
        
        $res.ContentLength64 = $bytes.Length
        $res.OutputStream.Write($bytes, 0, $bytes.Length)
        $res.OutputStream.Flush()
    } else {
        $res.StatusCode = 404
        $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $res.ContentLength64 = $msg.Length
        $res.OutputStream.Write($msg, 0, $msg.Length)
        $res.OutputStream.Flush()
    }
    $res.Close()
}
