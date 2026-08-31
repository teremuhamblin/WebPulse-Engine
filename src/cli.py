import click
from seo_scanner import scan_seo

@click.command()
@click.argument("url")
def analyze(url):
    result = scan_seo(url)
    click.echo(result)

if __name__ == "__main__":
    analyze()
