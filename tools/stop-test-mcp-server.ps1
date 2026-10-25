$ErrorActionPreference = 'Stop'

$serverPattern = '(?i)(?:^|\s)(?:"[^"]*[\\/])?tools[\\/]MCP-Server-Release[\\/]mcp-testing-server\.mjs"?(?=\s|$).*--transport\s+http(?:\s|$).*--port\s+3200(?:\s|$).*--monitor-port\s+3201(?:\s|$)'
$processes = Get-CimInstance Win32_Process -Filter "Name = 'node.exe'" |
    Where-Object { $_.CommandLine -match $serverPattern }

if (-not $processes) {
    Write-Output 'Test-MCP-Server laeuft nicht.'
    exit 0
}

foreach ($process in $processes) {
    Stop-Process -Id $process.ProcessId -ErrorAction Stop
    Write-Output "Test-MCP-Server (PID $($process.ProcessId)) wurde gestoppt."
}
