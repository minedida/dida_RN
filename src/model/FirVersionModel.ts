export default class FirVersionModel {
  name: string
  version: string
  changelog: string
  updated_at: number
  build: string
  installUrl: string
  install_url: string
  direct_install_url: string
  update_url: string
  binary: { fsize: number }
}
