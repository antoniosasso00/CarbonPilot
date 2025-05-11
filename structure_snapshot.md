# 📊 Diagnostica progetto CarbonPilot
- 📆 Generato il: `2025-05-11 19:54:51`

## 📁 Struttura progetto
```
├── .env
├── .gitignore
├── .pytest_cache
│   ├── .gitignore
│   ├── CACHEDIR.TAG
│   ├── README.md
│   └── v
│       └── cache
│           ├── lastfailed
│           ├── nodeids
│           └── stepwise
├── Lib
│   └── site-packages
│       ├── pip
│       │   ├── __init__.py
│       │   ├── __main__.py
│       │   ├── __pip-runner__.py
│       │   ├── _internal
│       │   │   ├── __init__.py
│       │   │   ├── build_env.py
│       │   │   ├── cache.py
│       │   │   ├── cli
│       │   │   │   ├── __init__.py
│       │   │   │   ├── autocompletion.py
│       │   │   │   ├── base_command.py
│       │   │   │   ├── cmdoptions.py
│       │   │   │   ├── command_context.py
│       │   │   │   ├── index_command.py
│       │   │   │   ├── main.py
│       │   │   │   ├── main_parser.py
│       │   │   │   ├── parser.py
│       │   │   │   ├── progress_bars.py
│       │   │   │   ├── req_command.py
│       │   │   │   ├── spinners.py
│       │   │   │   └── status_codes.py
│       │   │   ├── commands
│       │   │   │   ├── __init__.py
│       │   │   │   ├── cache.py
│       │   │   │   ├── check.py
│       │   │   │   ├── completion.py
│       │   │   │   ├── configuration.py
│       │   │   │   ├── debug.py
│       │   │   │   ├── download.py
│       │   │   │   ├── freeze.py
│       │   │   │   ├── hash.py
│       │   │   │   ├── help.py
│       │   │   │   ├── index.py
│       │   │   │   ├── inspect.py
│       │   │   │   ├── install.py
│       │   │   │   ├── list.py
│       │   │   │   ├── lock.py
│       │   │   │   ├── search.py
│       │   │   │   ├── show.py
│       │   │   │   ├── uninstall.py
│       │   │   │   └── wheel.py
│       │   │   ├── configuration.py
│       │   │   ├── distributions
│       │   │   │   ├── __init__.py
│       │   │   │   ├── base.py
│       │   │   │   ├── installed.py
│       │   │   │   ├── sdist.py
│       │   │   │   └── wheel.py
│       │   │   ├── exceptions.py
│       │   │   ├── index
│       │   │   │   ├── __init__.py
│       │   │   │   ├── collector.py
│       │   │   │   ├── package_finder.py
│       │   │   │   └── sources.py
│       │   │   ├── locations
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _distutils.py
│       │   │   │   ├── _sysconfig.py
│       │   │   │   └── base.py
│       │   │   ├── main.py
│       │   │   ├── metadata
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _json.py
│       │   │   │   ├── base.py
│       │   │   │   ├── importlib
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── _compat.py
│       │   │   │   │   ├── _dists.py
│       │   │   │   │   └── _envs.py
│       │   │   │   └── pkg_resources.py
│       │   │   ├── models
│       │   │   │   ├── __init__.py
│       │   │   │   ├── candidate.py
│       │   │   │   ├── direct_url.py
│       │   │   │   ├── format_control.py
│       │   │   │   ├── index.py
│       │   │   │   ├── installation_report.py
│       │   │   │   ├── link.py
│       │   │   │   ├── pylock.py
│       │   │   │   ├── scheme.py
│       │   │   │   ├── search_scope.py
│       │   │   │   ├── selection_prefs.py
│       │   │   │   ├── target_python.py
│       │   │   │   └── wheel.py
│       │   │   ├── network
│       │   │   │   ├── __init__.py
│       │   │   │   ├── auth.py
│       │   │   │   ├── cache.py
│       │   │   │   ├── download.py
│       │   │   │   ├── lazy_wheel.py
│       │   │   │   ├── session.py
│       │   │   │   ├── utils.py
│       │   │   │   └── xmlrpc.py
│       │   │   ├── operations
│       │   │   │   ├── __init__.py
│       │   │   │   ├── build
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── build_tracker.py
│       │   │   │   │   ├── metadata.py
│       │   │   │   │   ├── metadata_editable.py
│       │   │   │   │   ├── metadata_legacy.py
│       │   │   │   │   ├── wheel.py
│       │   │   │   │   ├── wheel_editable.py
│       │   │   │   │   └── wheel_legacy.py
│       │   │   │   ├── check.py
│       │   │   │   ├── freeze.py
│       │   │   │   ├── install
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── editable_legacy.py
│       │   │   │   │   └── wheel.py
│       │   │   │   └── prepare.py
│       │   │   ├── pyproject.py
│       │   │   ├── req
│       │   │   │   ├── __init__.py
│       │   │   │   ├── constructors.py
│       │   │   │   ├── req_dependency_group.py
│       │   │   │   ├── req_file.py
│       │   │   │   ├── req_install.py
│       │   │   │   ├── req_set.py
│       │   │   │   └── req_uninstall.py
│       │   │   ├── resolution
│       │   │   │   ├── __init__.py
│       │   │   │   ├── base.py
│       │   │   │   ├── legacy
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   └── resolver.py
│       │   │   │   └── resolvelib
│       │   │   │       ├── __init__.py
│       │   │   │       ├── base.py
│       │   │   │       ├── candidates.py
│       │   │   │       ├── factory.py
│       │   │   │       ├── found_candidates.py
│       │   │   │       ├── provider.py
│       │   │   │       ├── reporter.py
│       │   │   │       ├── requirements.py
│       │   │   │       └── resolver.py
│       │   │   ├── self_outdated_check.py
│       │   │   ├── utils
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _jaraco_text.py
│       │   │   │   ├── _log.py
│       │   │   │   ├── appdirs.py
│       │   │   │   ├── compat.py
│       │   │   │   ├── compatibility_tags.py
│       │   │   │   ├── datetime.py
│       │   │   │   ├── deprecation.py
│       │   │   │   ├── direct_url_helpers.py
│       │   │   │   ├── egg_link.py
│       │   │   │   ├── entrypoints.py
│       │   │   │   ├── filesystem.py
│       │   │   │   ├── filetypes.py
│       │   │   │   ├── glibc.py
│       │   │   │   ├── hashes.py
│       │   │   │   ├── logging.py
│       │   │   │   ├── misc.py
│       │   │   │   ├── packaging.py
│       │   │   │   ├── retry.py
│       │   │   │   ├── setuptools_build.py
│       │   │   │   ├── subprocess.py
│       │   │   │   ├── temp_dir.py
│       │   │   │   ├── unpacking.py
│       │   │   │   ├── urls.py
│       │   │   │   ├── virtualenv.py
│       │   │   │   └── wheel.py
│       │   │   ├── vcs
│       │   │   │   ├── __init__.py
│       │   │   │   ├── bazaar.py
│       │   │   │   ├── git.py
│       │   │   │   ├── mercurial.py
│       │   │   │   ├── subversion.py
│       │   │   │   └── versioncontrol.py
│       │   │   └── wheel_builder.py
│       │   ├── _vendor
│       │   │   ├── __init__.py
│       │   │   ├── cachecontrol
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _cmd.py
│       │   │   │   ├── adapter.py
│       │   │   │   ├── cache.py
│       │   │   │   ├── caches
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── file_cache.py
│       │   │   │   │   └── redis_cache.py
│       │   │   │   ├── controller.py
│       │   │   │   ├── filewrapper.py
│       │   │   │   ├── heuristics.py
│       │   │   │   ├── py.typed
│       │   │   │   ├── serialize.py
│       │   │   │   └── wrapper.py
│       │   │   ├── certifi
│       │   │   │   ├── __init__.py
│       │   │   │   ├── __main__.py
│       │   │   │   ├── cacert.pem
│       │   │   │   ├── core.py
│       │   │   │   └── py.typed
│       │   │   ├── dependency_groups
│       │   │   │   ├── __init__.py
│       │   │   │   ├── __main__.py
│       │   │   │   ├── _implementation.py
│       │   │   │   ├── _lint_dependency_groups.py
│       │   │   │   ├── _pip_wrapper.py
│       │   │   │   ├── _toml_compat.py
│       │   │   │   └── py.typed
│       │   │   ├── distlib
│       │   │   │   ├── __init__.py
│       │   │   │   ├── compat.py
│       │   │   │   ├── database.py
│       │   │   │   ├── index.py
│       │   │   │   ├── locators.py
│       │   │   │   ├── manifest.py
│       │   │   │   ├── markers.py
│       │   │   │   ├── metadata.py
│       │   │   │   ├── resources.py
│       │   │   │   ├── scripts.py
│       │   │   │   ├── t32.exe
│       │   │   │   ├── t64-arm.exe
│       │   │   │   ├── t64.exe
│       │   │   │   ├── util.py
│       │   │   │   ├── version.py
│       │   │   │   ├── w32.exe
│       │   │   │   ├── w64-arm.exe
│       │   │   │   ├── w64.exe
│       │   │   │   └── wheel.py
│       │   │   ├── distro
│       │   │   │   ├── __init__.py
│       │   │   │   ├── __main__.py
│       │   │   │   ├── distro.py
│       │   │   │   └── py.typed
│       │   │   ├── idna
│       │   │   │   ├── __init__.py
│       │   │   │   ├── codec.py
│       │   │   │   ├── compat.py
│       │   │   │   ├── core.py
│       │   │   │   ├── idnadata.py
│       │   │   │   ├── intranges.py
│       │   │   │   ├── package_data.py
│       │   │   │   ├── py.typed
│       │   │   │   └── uts46data.py
│       │   │   ├── msgpack
│       │   │   │   ├── __init__.py
│       │   │   │   ├── exceptions.py
│       │   │   │   ├── ext.py
│       │   │   │   └── fallback.py
│       │   │   ├── packaging
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _elffile.py
│       │   │   │   ├── _manylinux.py
│       │   │   │   ├── _musllinux.py
│       │   │   │   ├── _parser.py
│       │   │   │   ├── _structures.py
│       │   │   │   ├── _tokenizer.py
│       │   │   │   ├── licenses
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   └── _spdx.py
│       │   │   │   ├── markers.py
│       │   │   │   ├── metadata.py
│       │   │   │   ├── py.typed
│       │   │   │   ├── requirements.py
│       │   │   │   ├── specifiers.py
│       │   │   │   ├── tags.py
│       │   │   │   ├── utils.py
│       │   │   │   └── version.py
│       │   │   ├── pkg_resources
│       │   │   │   └── __init__.py
│       │   │   ├── platformdirs
│       │   │   │   ├── __init__.py
│       │   │   │   ├── __main__.py
│       │   │   │   ├── android.py
│       │   │   │   ├── api.py
│       │   │   │   ├── macos.py
│       │   │   │   ├── py.typed
│       │   │   │   ├── unix.py
│       │   │   │   ├── version.py
│       │   │   │   └── windows.py
│       │   │   ├── pygments
│       │   │   │   ├── __init__.py
│       │   │   │   ├── __main__.py
│       │   │   │   ├── console.py
│       │   │   │   ├── filter.py
│       │   │   │   ├── filters
│       │   │   │   │   └── __init__.py
│       │   │   │   ├── formatter.py
│       │   │   │   ├── formatters
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   └── _mapping.py
│       │   │   │   ├── lexer.py
│       │   │   │   ├── lexers
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── _mapping.py
│       │   │   │   │   └── python.py
│       │   │   │   ├── modeline.py
│       │   │   │   ├── plugin.py
│       │   │   │   ├── regexopt.py
│       │   │   │   ├── scanner.py
│       │   │   │   ├── sphinxext.py
│       │   │   │   ├── style.py
│       │   │   │   ├── styles
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   └── _mapping.py
│       │   │   │   ├── token.py
│       │   │   │   ├── unistring.py
│       │   │   │   └── util.py
│       │   │   ├── pyproject_hooks
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _impl.py
│       │   │   │   ├── _in_process
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   └── _in_process.py
│       │   │   │   └── py.typed
│       │   │   ├── requests
│       │   │   │   ├── __init__.py
│       │   │   │   ├── __version__.py
│       │   │   │   ├── _internal_utils.py
│       │   │   │   ├── adapters.py
│       │   │   │   ├── api.py
│       │   │   │   ├── auth.py
│       │   │   │   ├── certs.py
│       │   │   │   ├── compat.py
│       │   │   │   ├── cookies.py
│       │   │   │   ├── exceptions.py
│       │   │   │   ├── help.py
│       │   │   │   ├── hooks.py
│       │   │   │   ├── models.py
│       │   │   │   ├── packages.py
│       │   │   │   ├── sessions.py
│       │   │   │   ├── status_codes.py
│       │   │   │   ├── structures.py
│       │   │   │   └── utils.py
│       │   │   ├── resolvelib
│       │   │   │   ├── __init__.py
│       │   │   │   ├── providers.py
│       │   │   │   ├── py.typed
│       │   │   │   ├── reporters.py
│       │   │   │   ├── resolvers
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── abstract.py
│       │   │   │   │   ├── criterion.py
│       │   │   │   │   ├── exceptions.py
│       │   │   │   │   └── resolution.py
│       │   │   │   └── structs.py
│       │   │   ├── rich
│       │   │   │   ├── __init__.py
│       │   │   │   ├── __main__.py
│       │   │   │   ├── _cell_widths.py
│       │   │   │   ├── _emoji_codes.py
│       │   │   │   ├── _emoji_replace.py
│       │   │   │   ├── _export_format.py
│       │   │   │   ├── _extension.py
│       │   │   │   ├── _fileno.py
│       │   │   │   ├── _inspect.py
│       │   │   │   ├── _log_render.py
│       │   │   │   ├── _loop.py
│       │   │   │   ├── _null_file.py
│       │   │   │   ├── _palettes.py
│       │   │   │   ├── _pick.py
│       │   │   │   ├── _ratio.py
│       │   │   │   ├── _spinners.py
│       │   │   │   ├── _stack.py
│       │   │   │   ├── _timer.py
│       │   │   │   ├── _win32_console.py
│       │   │   │   ├── _windows.py
│       │   │   │   ├── _windows_renderer.py
│       │   │   │   ├── _wrap.py
│       │   │   │   ├── abc.py
│       │   │   │   ├── align.py
│       │   │   │   ├── ansi.py
│       │   │   │   ├── bar.py
│       │   │   │   ├── box.py
│       │   │   │   ├── cells.py
│       │   │   │   ├── color.py
│       │   │   │   ├── color_triplet.py
│       │   │   │   ├── columns.py
│       │   │   │   ├── console.py
│       │   │   │   ├── constrain.py
│       │   │   │   ├── containers.py
│       │   │   │   ├── control.py
│       │   │   │   ├── default_styles.py
│       │   │   │   ├── diagnose.py
│       │   │   │   ├── emoji.py
│       │   │   │   ├── errors.py
│       │   │   │   ├── file_proxy.py
│       │   │   │   ├── filesize.py
│       │   │   │   ├── highlighter.py
│       │   │   │   ├── json.py
│       │   │   │   ├── jupyter.py
│       │   │   │   ├── layout.py
│       │   │   │   ├── live.py
│       │   │   │   ├── live_render.py
│       │   │   │   ├── logging.py
│       │   │   │   ├── markup.py
│       │   │   │   ├── measure.py
│       │   │   │   ├── padding.py
│       │   │   │   ├── pager.py
│       │   │   │   ├── palette.py
│       │   │   │   ├── panel.py
│       │   │   │   ├── pretty.py
│       │   │   │   ├── progress.py
│       │   │   │   ├── progress_bar.py
│       │   │   │   ├── prompt.py
│       │   │   │   ├── protocol.py
│       │   │   │   ├── py.typed
│       │   │   │   ├── region.py
│       │   │   │   ├── repr.py
│       │   │   │   ├── rule.py
│       │   │   │   ├── scope.py
│       │   │   │   ├── screen.py
│       │   │   │   ├── segment.py
│       │   │   │   ├── spinner.py
│       │   │   │   ├── status.py
│       │   │   │   ├── style.py
│       │   │   │   ├── styled.py
│       │   │   │   ├── syntax.py
│       │   │   │   ├── table.py
│       │   │   │   ├── terminal_theme.py
│       │   │   │   ├── text.py
│       │   │   │   ├── theme.py
│       │   │   │   ├── themes.py
│       │   │   │   ├── traceback.py
│       │   │   │   └── tree.py
│       │   │   ├── tomli
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _parser.py
│       │   │   │   ├── _re.py
│       │   │   │   ├── _types.py
│       │   │   │   └── py.typed
│       │   │   ├── tomli_w
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _writer.py
│       │   │   │   └── py.typed
│       │   │   ├── truststore
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _api.py
│       │   │   │   ├── _macos.py
│       │   │   │   ├── _openssl.py
│       │   │   │   ├── _ssl_constants.py
│       │   │   │   ├── _windows.py
│       │   │   │   └── py.typed
│       │   │   ├── typing_extensions.py
│       │   │   ├── urllib3
│       │   │   │   ├── __init__.py
│       │   │   │   ├── _collections.py
│       │   │   │   ├── _version.py
│       │   │   │   ├── connection.py
│       │   │   │   ├── connectionpool.py
│       │   │   │   ├── contrib
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── _appengine_environ.py
│       │   │   │   │   ├── _securetransport
│       │   │   │   │   │   ├── __init__.py
│       │   │   │   │   │   ├── bindings.py
│       │   │   │   │   │   └── low_level.py
│       │   │   │   │   ├── appengine.py
│       │   │   │   │   ├── ntlmpool.py
│       │   │   │   │   ├── pyopenssl.py
│       │   │   │   │   ├── securetransport.py
│       │   │   │   │   └── socks.py
│       │   │   │   ├── exceptions.py
│       │   │   │   ├── fields.py
│       │   │   │   ├── filepost.py
│       │   │   │   ├── packages
│       │   │   │   │   ├── __init__.py
│       │   │   │   │   ├── backports
│       │   │   │   │   │   ├── __init__.py
│       │   │   │   │   │   ├── makefile.py
│       │   │   │   │   │   └── weakref_finalize.py
│       │   │   │   │   └── six.py
│       │   │   │   ├── poolmanager.py
│       │   │   │   ├── request.py
│       │   │   │   ├── response.py
│       │   │   │   └── util
│       │   │   │       ├── __init__.py
│       │   │   │       ├── connection.py
│       │   │   │       ├── proxy.py
│       │   │   │       ├── queue.py
│       │   │   │       ├── request.py
│       │   │   │       ├── response.py
│       │   │   │       ├── retry.py
│       │   │   │       ├── ssl_.py
│       │   │   │       ├── ssl_match_hostname.py
│       │   │   │       ├── ssltransport.py
│       │   │   │       ├── timeout.py
│       │   │   │       ├── url.py
│       │   │   │       └── wait.py
│       │   │   └── vendor.txt
│       │   └── py.typed
│       └── pip-25.1.1.dist-info
│           ├── INSTALLER
│           ├── METADATA
│           ├── RECORD
│           ├── REQUESTED
│           ├── WHEEL
│           ├── entry_points.txt
│           ├── licenses
│           │   ├── AUTHORS.txt
│           │   └── LICENSE.txt
│           └── top_level.txt
├── README.md
├── Scripts
│   ├── pip.exe
│   ├── pip3.13.exe
│   └── pip3.exe
├── backend
│   ├── .env
│   ├── Dockerfile
│   ├── README.md
│   ├── __init__.py
│   ├── alembic
│   │   ├── README
│   │   ├── env.py
│   │   ├── script.py.mako
│   │   └── versions
│   │       ├── 455e264c6e0c_add_valves_required_to_part_remove_num_.py
│   │       ├── 7b0f1937b967_add_lamination_time_to_parts_and_create_.py
│   │       ├── 99913743b1c6_add_nesting_models.py
│   │       └── ce4649da7371_add_autoclave_supported_cycles_table_.py
│   ├── alembic.ini
│   ├── api
│   │   ├── api_v1
│   │   │   ├── api.py
│   │   │   └── endpoints
│   │   │       ├── autoclave.py
│   │   │       ├── cure_cycles.py
│   │   │       └── schedule.py
│   │   └── nesting.py
│   ├── crud
│   │   ├── autoclaves.py
│   │   ├── catalog_parts.py
│   │   ├── parts.py
│   │   └── schedules.py
│   ├── database.py
│   ├── main.py
│   ├── models
│   │   ├── __init__.py
│   │   ├── autoclave.py
│   │   ├── catalog_part.py
│   │   ├── cure_cycle.py
│   │   ├── nesting.py
│   │   ├── part.py
│   │   └── schedule.py
│   ├── pyproject.toml
│   ├── repositories
│   │   ├── autoclave.py
│   │   ├── cure_cycle.py
│   │   └── schedule.py
│   ├── routers
│   │   ├── autoclaves.py
│   │   ├── catalog_parts.py
│   │   ├── nesting.py
│   │   ├── parts.py
│   │   ├── reports.py
│   │   └── schedules.py
│   ├── schemas
│   │   ├── autoclave.py
│   │   ├── catalog_part.py
│   │   ├── cure_cycle.py
│   │   ├── part.py
│   │   └── schedule.py
│   ├── scripts
│   │   ├── __init__.py
│   │   └── seed_data.py
│   ├── services
│   │   ├── nesting.py
│   │   └── pdf_report.py
│   └── venv
│       └── Lib
│           └── site-packages
│               ├── alembic
│               │   ├── autogenerate
│               │   ├── ddl
│               │   ├── operations
│               │   ├── runtime
│               │   ├── script
│               │   ├── templates
│               │   │   ├── async
│               │   │   ├── generic
│               │   │   └── multidb
│               │   ├── testing
│               │   │   ├── plugin
│               │   │   └── suite
│               │   └── util
│               ├── annotated_types
│               ├── anyio
│               │   ├── _backends
│               │   ├── _core
│               │   ├── abc
│               │   └── streams
│               ├── click
│               ├── colorama
│               │   └── tests
│               ├── dotenv
│               ├── fastapi
│               │   ├── dependencies
│               │   ├── middleware
│               │   ├── openapi
│               │   └── security
│               ├── greenlet
│               │   ├── _greenlet.cp312-win_amd64.pyd
│               │   ├── platform
│               │   └── tests
│               │       ├── _test_extension.cp312-win_amd64.pyd
│               │       └── _test_extension_cpp.cp312-win_amd64.pyd
│               ├── h11
│               ├── idna
│               ├── mako
│               │   ├── ext
│               │   └── testing
│               ├── markupsafe
│               │   └── _speedups.cp312-win_amd64.pyd
│               ├── pip
│               │   ├── _internal
│               │   │   ├── cli
│               │   │   ├── commands
│               │   │   ├── distributions
│               │   │   ├── index
│               │   │   ├── locations
│               │   │   ├── metadata
│               │   │   │   └── importlib
│               │   │   ├── models
│               │   │   ├── network
│               │   │   ├── operations
│               │   │   │   ├── build
│               │   │   │   └── install
│               │   │   ├── req
│               │   │   ├── resolution
│               │   │   │   ├── legacy
│               │   │   │   └── resolvelib
│               │   │   ├── utils
│               │   │   └── vcs
│               │   └── _vendor
│               │       ├── cachecontrol
│               │       │   └── caches
│               │       ├── certifi
│               │       ├── distlib
│               │       ├── distro
│               │       ├── idna
│               │       ├── msgpack
│               │       ├── packaging
│               │       │   └── licenses
│               │       ├── pkg_resources
│               │       ├── platformdirs
│               │       ├── pygments
│               │       │   ├── filters
│               │       │   ├── formatters
│               │       │   ├── lexers
│               │       │   └── styles
│               │       ├── pyproject_hooks
│               │       │   └── _in_process
│               │       ├── requests
│               │       ├── resolvelib
│               │       │   └── compat
│               │       ├── rich
│               │       ├── tomli
│               │       ├── truststore
│               │       └── urllib3
│               │           ├── contrib
│               │           │   └── _securetransport
│               │           ├── packages
│               │           │   └── backports
│               │           └── util
│               ├── psycopg2
│               │   └── _psycopg.cp312-win_amd64.pyd
│               ├── pydantic
│               │   ├── _internal
│               │   ├── deprecated
│               │   ├── experimental
│               │   ├── plugin
│               │   └── v1
│               ├── pydantic_core
│               │   └── _pydantic_core.cp312-win_amd64.pyd
│               ├── sniffio
│               │   └── _tests
│               ├── sqlalchemy
│               │   ├── connectors
│               │   ├── cyextension
│               │   │   ├── collections.cp312-win_amd64.pyd
│               │   │   ├── immutabledict.cp312-win_amd64.pyd
│               │   │   ├── processors.cp312-win_amd64.pyd
│               │   │   ├── resultproxy.cp312-win_amd64.pyd
│               │   │   └── util.cp312-win_amd64.pyd
│               │   ├── dialects
│               │   │   ├── mssql
│               │   │   ├── mysql
│               │   │   ├── oracle
│               │   │   ├── postgresql
│               │   │   └── sqlite
│               │   ├── engine
│               │   ├── event
│               │   ├── ext
│               │   │   ├── asyncio
│               │   │   ├── declarative
│               │   │   └── mypy
│               │   ├── future
│               │   ├── orm
│               │   ├── pool
│               │   ├── sql
│               │   ├── testing
│               │   │   ├── fixtures
│               │   │   ├── plugin
│               │   │   └── suite
│               │   └── util
│               ├── starlette
│               │   └── middleware
│               ├── typing_inspection
│               └── uvicorn
│                   ├── lifespan
│                   ├── loops
│                   ├── middleware
│                   ├── protocols
│                   │   ├── http
│                   │   └── websockets
│                   └── supervisors
├── changelog.md
├── docker-compose.yml
├── frontend
│   ├── .dockerignore
│   ├── .gitignore
│   ├── Dockerfile
│   ├── README.md
│   ├── app
│   │   ├── autoclaves
│   │   │   ├── new
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── catalog
│   │   │   ├── new
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── nesting
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   ├── parts
│   │   │   ├── [id]
│   │   │   │   ├── edit
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── new
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   └── schedules
│   │       ├── layout.tsx
│   │       ├── new
│   │       │   └── page.tsx
│   │       └── page.tsx
│   ├── components
│   │   ├── calendar
│   │   │   └── Calendar.tsx
│   │   ├── nesting
│   │   │   └── NestingPreview.tsx
│   │   ├── schedule
│   │   │   └── ScheduleForm.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── popover.tsx
│   │       └── select.tsx
│   ├── components.json
│   ├── eslint.config.mjs
│   ├── jsconfig.json
│   ├── lib
│   │   ├── api.ts
│   │   └── utils.ts
│   ├── next.config.js
│   ├── next.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── postcss.config.mjs
│   ├── public
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── types
│       ├── autoclave.ts
│       ├── catalog_part.ts
│       ├── nesting.ts
│       ├── part.ts
│       ├── react-big-calendar.d.ts
│       └── schedule.ts
├── next-env.d.ts
├── next.config.js
├── next.config.ts
├── package-lock.json
├── package.json
├── regole_progetto.md
├── requirements.txt
├── roadmap_progetto.md
├── setup-dev.ps1
├── structure_snapshot.md
├── tests
│   └── test_valves.py
├── tools
│   ├── carbonpilot_manager.py
│   └── types_backup
│       ├── autoclave.ts
│       ├── catalog_part.ts
│       ├── nesting.ts
│       ├── part.ts
│       ├── react-big-calendar.d.ts
│       └── schedule.ts
└── tsconfig.json
```

## 🔄 Confronto `autoclave` (Model vs Schema)
- `supported_cycles` presente nello schema ma non nel model

## 🔄 Confronto `schedule` (Model vs Schema)
- `part_ids` presente nello schema ma non nel model
- `parts` presente nello schema ma non nel model

## 🔗 Verifica API vs backend
- `` definito nei router ma non usato in `lib/api.ts`
- `nesting/pdf` definito nei router ma non usato in `lib/api.ts`
- `report` definito nei router ma non usato in `lib/api.ts`
- `{autoclave_id}` definito nei router ma non usato in `lib/api.ts`
- `{catalog_part_id}` definito nei router ma non usato in `lib/api.ts`
- `{part_id}` definito nei router ma non usato in `lib/api.ts`
- `{schedule_id}` definito nei router ma non usato in `lib/api.ts`
- `${BASE_URL}/autoclaves` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/autoclaves/${id}` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/catalog_parts` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/catalog_parts/${id}` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/nesting` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/nesting/report` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/parts` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/parts/${id}` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/schedules` usato in `lib/api.ts` ma non definito nei router
- `${BASE_URL}/schedules/${id}` usato in `lib/api.ts` ma non definito nei router

## ❗ Import di simbolo non esportato: `useEffect` in `autoclaves/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `autoclaves/page.tsx`

## ❗ Import di simbolo non esportato: `getAutoclaves` in `autoclaves/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `autoclaves/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `autoclaves/new/page.tsx`

## ❗ Import di simbolo non esportato: `useRouter` in `autoclaves/new/page.tsx`

## ❗ Import di simbolo non esportato: `Input` in `autoclaves/new/page.tsx`

## ❗ Import di simbolo non esportato: `Label` in `autoclaves/new/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `autoclaves/new/page.tsx`

## ❗ Import di simbolo non esportato: `createAutoclave` in `autoclaves/new/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `catalog/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `catalog/page.tsx`

## ❗ Import di simbolo non esportato: `getCatalogParts` in `catalog/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `catalog/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `catalog/new/page.tsx`

## ❗ Import di simbolo non esportato: `useRouter` in `catalog/new/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `catalog/new/page.tsx`

## ❗ Import di simbolo non esportato: `Input` in `catalog/new/page.tsx`

## ❗ Import di simbolo non esportato: `Label` in `catalog/new/page.tsx`

## ❗ Import di simbolo non esportato: `createCatalogPart` in `catalog/new/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `nesting/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `nesting/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `nesting/page.tsx`

## ❗ Import di simbolo non esportato: `runNesting` in `nesting/page.tsx`

## ❗ Import di simbolo non esportato: `getParts` in `nesting/page.tsx`

## ❗ Import di simbolo non esportato: `getAutoclaves` in `nesting/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `parts/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `parts/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `parts/page.tsx`

## ❗ Import di simbolo non esportato: `getParts` in `parts/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `useRouter` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `Input` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `Label` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `createPart` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `getCatalogParts` in `parts/new/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `parts/[id]/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `parts/[id]/page.tsx`

## ❗ Import di simbolo non esportato: `useParams` in `parts/[id]/page.tsx`

## ❗ Import di simbolo non esportato: `getPartById` in `parts/[id]/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `useRouter` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `useParams` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `Input` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `Label` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `getPartById` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `updatePart` in `parts/[id]/edit/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `Calendar` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `momentLocalizer` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `getSchedules` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `getScheduleById` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `Dialog` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `DialogContent` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `DialogHeader` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `DialogTitle` in `schedules/page.tsx`

## ❗ Import di simbolo non esportato: `useEffect` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `useState` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `useRouter` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `Input` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `Label` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `Button` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `createSchedule` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `getParts` in `schedules/new/page.tsx`

## ❗ Import di simbolo non esportato: `getAutoclaves` in `schedules/new/page.tsx`

## 🧠 Verifica variabili dichiarate vs usate
### ⚠️ Variabili usate ma mai dichiarate:
- `A` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `API` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `APIRouter` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `ASSIGN_MIN_VALUE` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `AUTOCLAVE` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `AUTOCLAVED` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `AUTOCLAVES` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `Add` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `AddBoolOr` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `Agenda` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `Aggiungi` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py
- `Alembic` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `Alias` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py
- `Altezza` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `Anteprima` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `Args` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `Arial` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `Array` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `Autoclave` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts
- `AutoclaveBase` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py
- `AutoclaveCreate` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts
- `AutoclaveInput` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts
- `AutoclaveRead` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py
- `AutoclaveUpdate` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py
- `Autoclaves` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `AutoclavesPage` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx
- `Autoclavi` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `Avanti` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `B` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `BASE_URL` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `Backend` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `Base` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\database.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `BaseModel` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `Benvenuto` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `BigCalendar` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `Blob` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `Body` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py
- `Boolean` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `Button` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `ButtonHTMLAttributes` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `ButtonProps` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `BytesIO` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `C` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `C001` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py
- `CASCADE` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py
- `CATALOG` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `CCCCCC` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `CHOOSE_FIRST_UNBOUND` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `CORS` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `CORSMiddleware` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `CP` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `CREATED` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `CSS` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `CURE` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `Calendar` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `CalendarEvent` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `CalendarProps` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `CarbonPilot` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `Caricamento` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `Catalog` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py
- `CatalogPage` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx
- `CatalogPart` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts
- `CatalogPartBase` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py
- `CatalogPartCreate` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py
- `CatalogPartInput` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts
- `CatalogPartRead` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py
- `CatalogPartUpdate` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py
- `Catalogo` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `Check` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `ChevronDown` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `ChevronLeft` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `ChevronRight` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `Ciclo` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `ClassValue` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `Close` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `Codici` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py
- `Coerenza` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py
- `Collegamento` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py
- `Colore` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `Column` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `Compila` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `ComponentProps` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx
- `ComponentPropsWithoutRef` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `Content` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `CpModel` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `CpSolver` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `Crea` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `Create` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `Cure` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py
- `CureCycle` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts
- `CureCycleCreate` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py
- `CureCycleRead` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py
- `Cycles` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py
- `DATABASE_URL` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `Data` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `Date` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `DateTime` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `Dati` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `DayPicker` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `Definisce` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `Depends` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `Description` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `Descrizione` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `Dettagli` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `Dettaglio` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx
- `Dialog` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `DialogClose` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `DialogContent` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `DialogDescription` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `DialogFooter` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `DialogHeader` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `DialogOverlay` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `DialogPortal` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `DialogPrimitive` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `DialogTitle` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `DialogTrigger` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `Dict` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `Dimensioni` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx
- `Disponibile` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx
- `Disponibili` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx
- `Disposition` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `Docker` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `Dopo` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `Downgrade` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `Durata` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `Edit` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `EditPartPage` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx
- `Elaborazione` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `ElementRef` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `Elenco` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `Eliminato` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `Endpoint` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `Enum` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `Error` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `Errore` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `Es` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `Esegui` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `Event` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `Exception` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py
- `FEASIBLE` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `FFAA00` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `FPDF` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `Facoltativo` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py
- `False` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\database.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `FastAPI` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `Field` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `Fine` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `Float` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py
- `ForeignKey` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `ForeignKeyConstraint` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `FormEvent` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `Genera` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `Gestione` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx
- `Getting` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `Giorno` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `Google` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `Group` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `H` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `HH` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `HTMLAttributes` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `HTMLButtonElement` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `HTMLDivElement` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `HTTPException` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `Home` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `ID` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `IT` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `Icon` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `IconLeft` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `IconRight` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `Il` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `Image` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `Import` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `Impossibile` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `Indietro` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `Inizio` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `Input` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `IntVar` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `Integer` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `Inter` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `IsGreaterOrEqualCstVar` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `Item` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `ItemIndicator` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `ItemText` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `JSON` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `LAMINATING` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `LYT` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `Label` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `LabelPrimitive` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx
- `Laminazione` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `Larghezza` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `Layout` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `Le` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `Linee` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx
- `Link` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `List` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `Longeron` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `Lunghezza` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx
- `M` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `MM` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `Marker` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\__init__.py
- `Math` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `Mese` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `Metadata` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `Modello` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `Modifica` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx
- `Modifiche` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx
- `N` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `NESTING` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `NEXT_PUBLIC_API_URL` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `Nessun` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `Nessuna` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `Nesting` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `NestingLayout` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `NestingModel` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `NestingPage` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `NestingPlacement` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `NestingPlacementResponse` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `NestingPreview` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `NestingRequest` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `NestingResult` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\nesting.ts
- `NewAutoclavePage` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx
- `NewCatalogPartPage` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx
- `NewIntVar` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `NewPartPage` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `NewSchedulePage` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `NewSearch` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `NextConfig` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `NextSolution` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `No` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `Nome` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx
- `None` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `NullPool` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `Number` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `Numero` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `Nuova` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `OPTIMAL` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `Oggi` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `Omit` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `Optional` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `Overlay` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `P` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `P001` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `PARTS` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `PDF` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `PDFReport` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `POST` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `PUT` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `Part` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `PartBase` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `PartCreate` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `PartDetailPage` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx
- `PartInput` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `PartRead` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `PartStatus` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `PartUpdate` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `Parte` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `Parti` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `Parts` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `PartsLayout` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx
- `PartsPage` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `Percorso` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `Phase` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `Pianificazione` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `Popover` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx
- `PopoverContent` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx
- `PopoverPrimitive` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx
- `PopoverTrigger` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx
- `Portal` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `Posizione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `PrimaryKeyConstraint` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `Promise` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `Props` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `PyEnum` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py
- `Pydantic` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py
- `Python` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\__init__.py
- `READY` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `Rappresenta` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `React` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `ReactNode` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx
- `ReactToastify` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `Readonly` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `Recupera` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `Registrazione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `Relazione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py
- `Rendi` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `Report` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `Reports` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `Restituisce` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py
- `Returns` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `Revises` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `Revision` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `Richieste` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `Rimuovi` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py
- `Ripristina` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py
- `Riprova` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `Root` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `RootLayout` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `Ruotato` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `S` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `SCHEDULES` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `STATUS_OPTIONS` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `Salva` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `Save` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `Scarica` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `Schedule` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\schedule.ts
- `ScheduleBase` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `ScheduleCreate` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `ScheduleDetail` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `ScheduleDetailedRead` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `ScheduleForm` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `ScheduleInput` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\schedule.ts
- `SchedulePage` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `ScheduleRead` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `ScheduleUpdate` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `Schedules` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `SchedulesLayout` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx
- `Se` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `Seed` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `Select` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `SelectContent` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `SelectGroup` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `SelectItem` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `SelectLabel` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `SelectPrimitive` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `SelectSeparator` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `SelectTrigger` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `SelectValue` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `Seleziona` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `Separator` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `Sequence` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `Session` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\database.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `SessionLocal` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `Settimana` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `Slot` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `Solve` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `Solver` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `Spazio` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `Started` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `Stato` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `StreamingResponse` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `String` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `TEMPLATE` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py
- `Tabella` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `Table` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `Tempo` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `Tipo` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `Title` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `Trigger` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `Troppe` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `True` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `Type` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `URL` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `Un` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `Union` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `UniqueConstraint` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py
- `Upgrade` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `Validazione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `Value` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `ValueError` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `Valvole` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `VariantProps` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `Verifica` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `Viewport` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `Voce` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx
- `Vuoto` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx
- `Welcome` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `X` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `Y` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `Za` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `__dict__` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `__file__` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `__init__` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `__tablename__` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `_build` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `a` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `absolute` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `abspath` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `accent` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `add` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `add_column` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py
- `add_middleware` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `add_page` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `adjust` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `agenda` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `aggiornamento` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `aggiunto` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `al` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `alembic` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `alert` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `align` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx
- `all` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `allineato` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts
- `allow_credentials` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `allow_headers` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `allow_methods` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `allow_origins` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `allowed` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `almeno` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `already` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py
- `and` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `animate` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `antialiased` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `any` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `api` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `api_router` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py
- `api_v1` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py
- `app` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `append` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `appendChild` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `application` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `aria` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `as` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `asChild` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `associazione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `async` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `attachment` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py
- `authority` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `auto` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `autoclave` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `autoclaveId` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `autoclave_height` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `autoclave_name` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `autoclave_supported_cycles` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `autoclave_width` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `autoclaved` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `autoclaves` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `autoclavi` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `autocommit` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `autoflush` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `await` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `b` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `back_populates` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py
- `backend` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `background` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `backref` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `base` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `baseClasses` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `begin_transaction` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `between` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `bg` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `big` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\react-big-calendar.d.ts
- `bind` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `black` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `blob` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `blue` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `body` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `bold` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `bool` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `boolean` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\nesting.ts
- `border` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `bottom` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `box` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `branch_labels` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `build_model` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `button` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `buttonVariants` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `by` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `bytes` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `c` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `calcolato` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `calendar` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\react-big-calendar.d.ts
- `campi` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `caption` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `caption_label` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `caratteristiche` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py
- `carbonio` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `carbonpilot` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `caricamento` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `caricare` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `cartella` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `cascade` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `catalog` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx
- `catalogOptions` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `catalog_part` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `catalog_part_id` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py
- `catalog_parts` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `catalogo` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts
- `catch` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `ce4649da7371` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `cell` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `center` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `changes` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `che` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `checkbox` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `checked` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `children` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `cicli` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py
- `ciclo` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts
- `class` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `className` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `classNames` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `classes` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `classi` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `click` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `client` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `close` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `closed` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `clsx` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `cn` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `codice` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py
- `codici` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts
- `coerenza` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py
- `col` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `collapse` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `colors` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `cols` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `commands` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `commit` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `compatibile` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `completato` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `components` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `comunicazione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `con` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts
- `concatenare` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `config` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `config_file_name` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `configure` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `conflitti` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `connect` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `connectable` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `connection` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `console` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `const` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `context` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `corretto` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `cors` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `corso` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `cp` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `cp_model` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `creata` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `create` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `createAutoclave` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `createCatalogPart` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `createElement` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `createObjectURL` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `createPart` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `createSchedule` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `create_autoclave` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py
- `create_catalog_part` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py
- `create_cure_cycle` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py
- `create_engine` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `create_index` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py
- `create_part` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py
- `create_schedule` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `create_table` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `created` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `creazione` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `crud` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `css` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `cura` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py
- `cure` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py
- `cure_cycle` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `cure_cycles` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `cursor` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `cva` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `cycle` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `cycles` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py
- `d` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `da` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts
- `dall` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `dark` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `data` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `database` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `date` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `dateFnsLocalizer` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `datetime` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `dati` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx
- `dato` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py
- `day` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `day_disabled` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `day_hidden` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `day_outside` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `day_range_end` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `day_range_middle` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `day_selected` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `day_today` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `db` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\database.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `db_autoclave` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py
- `db_cycle` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py
- `db_part` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py
- `db_schedule` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `dd` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `decimal` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `decision_builder` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `declarative` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `declarative_base` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `declare` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\types\react-big-calendar.d.ts
- `def` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\database.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `default` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `defaultVariants` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `defaultView` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `default_factory` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `default_parts` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `definizione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `dei` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py
- `del` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `delete` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `delete_autoclave` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py
- `delete_catalog_part` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py
- `delete_part` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py
- `delete_schedule` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `dell` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `della` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx
- `delle` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `depends_on` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `descrizione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py
- `dest` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `destructive` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `detail` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `dettagli` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `di` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts
- `dialect_opts` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `dialog` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `dialogOpen` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `dict` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `dimensioni` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py
- `dirname` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `disabled` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `disc` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `displayName` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `disponibili` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `disposizione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `dist` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `div` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `document` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `domains` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `dotenv` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `down_revision` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `downgrade` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `download` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `downloadNestingPDF` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `drop_column` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py
- `drop_index` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py
- `drop_table` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `dur` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `durante` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `durata` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py
- `duration` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `dy` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `e` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `effettiva` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `else` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx
- `en` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `encode` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `end` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `endAccessor` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `endpoints` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py
- `engine` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `enum` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `enumerate` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `env` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `env_path` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `err` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `error` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `es` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `esadecimale` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `event` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `events` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `eventuali` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `evita` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `example` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `except` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py
- `exclude_unset` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `execute` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `existing` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py
- `existing_schedule` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `exists` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py
- `experimental` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `export` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\nesting.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\schedule.ts
- `ext` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `extend_existing` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `extends` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `f` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `fade` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `false` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `falsy` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `family` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `fastapi` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `fetch` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `fff` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `fibra` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `field` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `file` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `fileConfig` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `filename` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `fill` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `filter` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `filtra` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `finally` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `find` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `first` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `fisica` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py
- `fixed` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `flex` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `float` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `fns` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `focus` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `font` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `fontSize` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `for` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `foreground` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `form` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `format` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `formato` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `formatted` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `forniti` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py
- `forwardRef` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `found` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `fpdf` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `from` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\database.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `from_attributes` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py
- `frontend` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `full` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `full_layout` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `func` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `function` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `g` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `gap` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx
- `generate_nesting` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py
- `generate_nesting_pdf` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `generate_nesting_report` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `generated` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `generato` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `generazione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py
- `gestione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `get` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `getAutoclaveById` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `getAutoclaves` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `getCatalogPartById` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `getCatalogParts` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `getDay` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `getMaxValves` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `getNestingResults` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `getPartById` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `getParts` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `getScheduleById` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `getSchedules` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `getTotalValves` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `get_all_autoclaves` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py
- `get_all_cure_cycles` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py
- `get_all_schedules` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `get_autoclave` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py
- `get_autoclave_by_name` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py
- `get_autoclaves` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py
- `get_catalog_part` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py
- `get_catalog_parts` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py
- `get_cure_cycle` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py
- `get_cure_cycle_by_code` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py
- `get_db` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\database.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `get_part` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py
- `get_parts` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py
- `get_schedule` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `get_schedules` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `getenv` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `ghost` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `globals` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `gradi` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `gray` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `green` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `grid` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `griglia` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `group` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx
- `h` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `h1` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `h2` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `handleChange` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `handleDownload` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `handleRun` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `handleSelectEvent` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `handleSubmit` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `has` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `head_cell` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `head_row` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `headers` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `height_mm` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `helper` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `hi` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `hidden` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `hj` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `hours` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `hover` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `href` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `html` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `htmlFor` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `http` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `i` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `icon` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `identifiers` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `ids` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `if` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `il` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `image` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `images` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `import` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\database.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `importare` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `in` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts
- `in_` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `include_router` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `includes` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `index` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `inizio` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `inline` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `input` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts
- `inputs` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `insert` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `inset` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `inside` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `int` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `inter` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `interface` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `invalid` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `invisible` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `io` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `is` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py
- `isNaN` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx
- `is_offline_mode` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `isoformat` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `it` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `item` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `items` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `ix_autoclaves_id` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py
- `ix_catalog_parts_id` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py
- `ix_cure_cycles_code` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py
- `ix_nesting_layouts_id` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py
- `ix_nesting_placements_id` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py
- `ix_parts_id` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py
- `ix_parts_part_number` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py
- `ix_schedules_id` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py
- `ix_schedules_start_time` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py
- `j` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `join` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `joinedload` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `json` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `justify` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `key` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `keyof` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `l` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `la` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `label` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx
- `lam` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `lam_time` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `laminating` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `lamination` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `laminazione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `lang` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `last` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `latin1` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `layout` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `layoutId` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `layout_data` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `layouts` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `le` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `leading` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx
- `left` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `len` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `length` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `let` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `lg` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `li` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `lib` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `limit` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `limite` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `linee` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `link` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `list` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `list_autoclaves` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py
- `list_cure_cycles` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py
- `literal_binds` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `ln` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `lo` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `loadSchedules` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `load_dotenv` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `loading` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `local` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `locale` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `locales` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `localhost` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `localizer` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `logging` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `lucide` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `m` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `main` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `make` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\__init__.py
- `map` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `mapped` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `margin` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `max` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `maxValves` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `max_total_duration` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `max_valves` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `mb` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `md` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `media_type` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `medium` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx
- `merge` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `message` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `messages` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `metadata` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `method` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `microsecond` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `middle` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `middleware` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `migration` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `min` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `minutes` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `minuti` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `ml` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `mm` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `mode` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `model` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `modelli` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `models` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `modo` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `module` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\types\react-big-calendar.d.ts
- `moment` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `momentLocalizer` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `mono` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `month` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `months` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `mt` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `multipla` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `multiple` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `muted` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `mx` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `my` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `named` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `nav` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `nav_button` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `nav_button_next` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `nav_button_previous` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `navigation` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `necessario` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py
- `nel` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `nell` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `nella` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `nesting` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `nesting_` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `nesting_layouts` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `nesting_pdf` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py
- `nesting_placements` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `nesting_report` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `new` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `next` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `nextConfig` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `no_overlap` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `nome` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py
- `non` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `none` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `normal` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `not` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `now` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `nowrap` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `null` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `nullable` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `num` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py
- `num_valves` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py
- `number` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\nesting.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\schedule.ts
- `nuovo` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py
- `o` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `obbligatori` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `object` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `of` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `offline` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `offset` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `ogni` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `ok` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `ol` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `onChange` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `onClick` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `onOpenChange` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `onSelect` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `onSelectEvent` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `onSubmit` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `onValueChange` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `ondelete` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py
- `online` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `only` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `op` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `opacity` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `open` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `oppure` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `opt` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `option` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `options` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `opzionale` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts
- `or` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `orientamento` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `orm` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\database.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `orm_mode` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `ortools` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `os` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\database.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `ottimizzata` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `out` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `outline` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `output` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `outside` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `overflow` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `p` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `package` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\__init__.py
- `page` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `params` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx
- `paramstyle` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `parse` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `parseFloat` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `parseInt` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `part` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `partIds` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `part_update` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py
- `parte` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts
- `parti` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `parts_data` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `partstatus` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py
- `pass` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `path` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `pattern` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `pdf` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `pdf_bytes` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `pdf_report` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `peer` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx
- `per` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `pezzi` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `pianificare` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `pianificazione` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `pianificazioni` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `picker` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `pl` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `place` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `placeholder` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `placement` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `placements` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `please` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `pointer` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `ponte` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py
- `pool` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `poolclass` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `popover` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `popper` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `position` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `posizionamento` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `posizione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `post` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `postgres` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `postgresql` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `poweredByHeader` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `pr` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `prefix` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `prev` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `preventDefault` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `previous` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `primary` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `primary_key` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `print` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `process` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `props` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `pt` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `push` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `put` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `px` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `py` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `pydantic` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `python` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `pywrapcp` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `query` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `questa` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `r` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `radix` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `raise` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `range` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `rawHeight` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `rawWidth` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `react` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\react-big-calendar.d.ts
- `reactStrictMode` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `read_autoclave` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py
- `read_autoclaves` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py
- `read_catalog_part` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py
- `read_catalog_parts` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py
- `read_part` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py
- `read_parts` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py
- `read_root` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `read_schedule` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `read_schedules` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `ready` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `rect` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `rectangles` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `recupero` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `red` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `reduce` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `ref` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `refresh` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `relation` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `relationship` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `relative` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `relazione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py
- `remove` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `replace` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `report` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `reportistica` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `reports` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `repositories` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py
- `request` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `required` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py
- `res` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `response` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `response_model` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py
- `responses` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `result` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `return` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `reverse` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `revision` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `richieste` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `right` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `ring` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `riuscito` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `rounded` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `router` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `routers` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `row` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `runNesting` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `run_migrations` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `run_migrations_offline` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `run_migrations_online` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `run_nesting` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `ruotata` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `rx` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `sa` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `salvataggio` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx
- `sans` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx
- `sat` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `scalar` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `scalars` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `scaleX` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `scaleY` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `schedule` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `schedule_id` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `schedule_part_association` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `schedule_parts` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py
- `schedules` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `scheduling` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `schema` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py
- `schemas` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py
- `screen` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `scripts` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `se` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py
- `second` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `secondary` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `section` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx
- `see` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `seed_data` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `select` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `selected` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `selectedAutoclave` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `selectedOptions` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `selectedParts` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `selection` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `selezionate` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `selezione` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `self` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `semibold` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `senza` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `serverActions` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `server_default` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `services` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `session` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `sessionmaker` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `setAutoclaves` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `setCatalog` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx
- `setCatalogOptions` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `setDialogOpen` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `setDuration` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `setError` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `setEvents` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `setForm` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `setLoading` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `setPart` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx
- `setParts` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `setResult` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `setSelected` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `setSelectedAutoclave` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `setSelectedParts` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `setStartTime` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `setSuccess` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `set_auto_page_break` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `set_font` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `setattr` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `shadow` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `showOutsideDays` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `sicurezza` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `sicuro` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `side` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `sideOffset` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx
- `single` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `sinistro` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py
- `size` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `sizeClasses` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `skip` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `slide` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `slot` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx
- `sm` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `soluzione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py
- `solve` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `solver` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `some` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `somma` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `source_catalog` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py
- `sovrapposizione` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `space` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `span` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `spazio` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `sql` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `sqlalchemy` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\database.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `sr` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `standard` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py
- `start` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `startAccessor` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `startOfWeek` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `startTime` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `state` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `status_code` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `stimata` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `str` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `strftime` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `string` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\nesting.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\schedule.ts
- `stringify` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `stroke` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `strokeWidth` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `strong` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `style` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `styles` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `submit` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `success` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `successo` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `sue` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py
- `sum` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `suo` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py
- `super` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `superano` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `superi` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `supportati` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py
- `supportato` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `supported_codes` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `svg` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `svgHeight` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `svgWidth` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `swcMinify` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `sys` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `t` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx
- `table` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `table_name` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py
- `tags` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\api.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\cure_cycles.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `tailwind` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `target` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `target_metadata` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `tbody` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `td` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `tecnica` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\cure_cycle.py
- `test` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `text` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `textAnchor` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `th` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `thead` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `then` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `this` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py
- `throw` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `tight` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `timedelta` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `timestamp` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py
- `timezone` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py
- `title` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `to` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\__init__.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `toISOString` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `toLocaleString` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `toast` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `toastify` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `today` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `togglePart` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `top` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `totalValves` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `total_time` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `total_valves` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `totali` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `tr` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx
- `tra` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py
- `tracking` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx
- `transition` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `translate` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `transparent` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `trigger` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `trovata` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `trovate` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `trovato` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py
- `true` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts
- `try` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `tsx` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx
- `tutte` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `tutti` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `twMerge` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `type` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\layout.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\next.config.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\nesting.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\schedule.ts
- `typeof` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `types` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `typing` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `ui` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `ul` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `un` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\cure_cycle.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx
- `una` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts
- `undefined` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `underline` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `unique` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py
- `unisce` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `uno` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `update` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `updateAutoclave` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `updatePart` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `updateSchedule` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `update_autoclave` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\autoclaves.py
- `update_catalog_part` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\catalog_parts.py
- `update_part` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\parts.py
- `update_schedule` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `updated` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py
- `updates` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `upgrade` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `url` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `usato` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\types\autoclave.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\catalog_part.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\types\part.ts
- `use` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `useEffect` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `useParams` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx
- `useRouter` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `useState` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `used` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\7b0f1937b967_add_lamination_time_to_parts_and_create_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\99913743b1c6_add_nesting_models.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py
- `utile` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\models\catalog_part.py
- `utilizzato` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\pdf_report.py
- `utils` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\label.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `v2` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\cure_cycle.py
- `val` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `valid_parts` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\nesting.py
- `valida` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py
- `validate_valves_capacity` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\routers\schedules.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `valido` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\routers\reports.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\page.tsx
- `valori` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\utils.ts
- `value` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\crud\autoclaves.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\catalog_parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\crud\parts.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\autoclave.py, C:\Users\Anton\Desktop\CarbonPilot\backend\repositories\schedule.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `values` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `valv` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `valves` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\455e264c6e0c_add_valves_required_to_part_remove_num_.py
- `valvesOk` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `valvole` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\schemas\part.py, C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx
- `var` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `variables` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `variance` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `variant` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `variantClasses` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `variants` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `version` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\main.py
- `viewBox` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `vincoli` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `visibile` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py
- `visible` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `voce` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `vs` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `vuoto` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\backend\models\autoclave.py
- `w` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\nesting\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `week` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\calendar\Calendar.tsx
- `where` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\scripts\seed_data.py
- `white` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\page.tsx
- `whitespace` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx
- `wi` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `width_mm` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\api\nesting.py
- `window` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\nesting\NestingPreview.tsx
- `with` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\env.py, C:\Users\Anton\Desktop\CarbonPilot\backend\alembic\versions\ce4649da7371_add_autoclave_supported_cycles_table_.py, C:\Users\Anton\Desktop\CarbonPilot\backend\api\api_v1\endpoints\autoclave.py
- `within` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx
- `wj` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `x_` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `xi` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `xj` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `xl` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\autoclaves\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\catalog\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\[id]\edit\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\app\schedules\new\page.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `xs` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\button.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\input.tsx
- `y_` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `yi` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `yield` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\database.py
- `yj` usata in: C:\Users\Anton\Desktop\CarbonPilot\backend\services\nesting.py
- `yyyy` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx
- `z` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\calendar.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx
- `z0` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\app\parts\new\page.tsx
- `zoom` usata in: C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\dialog.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\popover.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\components\ui\select.tsx

## ⚠️ Variabili usate in camelCase ma dichiarate in snake_case
- `autoclaveId` usata ma non dichiarata — forse intendevi `autoclave_id` → C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `createdAt` usata ma non dichiarata — forse intendevi `created_at` → C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\react-toastify\addons\use-notification-center\index.d.ts
- `defaultWidth` usata ma non dichiarata — forse intendevi `default_width` → C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\date-fns-jalali\locale\_lib\buildFormatLongFn.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\date-fns-jalali\locale\_lib\buildLocalizeFn.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\date-fns\locale\_lib\buildFormatLongFn.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\date-fns\locale\_lib\buildLocalizeFn.d.ts
- `endTime` usata ma non dichiarata — forse intendevi `end_time` → C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\@types\node\inspector.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\@types\node\ts4.8\inspector.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\@types\node\ts4.8\v8.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\@types\node\v8.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\next\dist\client\tracing\tracer.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\typescript\lib\lib.dom.d.ts
- `isAvailable` usata ma non dichiarata — forse intendevi `is_available` → C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\next\dist\server\lib\incremental-cache\fetch-cache.d.ts
- `layoutId` usata ma non dichiarata — forse intendevi `layout_id` → C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `partIds` usata ma non dichiarata — forse intendevi `part_ids` → C:\Users\Anton\Desktop\CarbonPilot\frontend\lib\api.ts
- `startTime` usata ma non dichiarata — forse intendevi `start_time` → C:\Users\Anton\Desktop\CarbonPilot\frontend\components\schedule\ScheduleForm.tsx, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\@types\node\inspector.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\@types\node\perf_hooks.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\@types\node\timers\promises.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\@types\node\ts4.8\inspector.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\@types\node\ts4.8\perf_hooks.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\@types\node\ts4.8\timers\promises.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\@types\node\ts4.8\v8.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\@types\node\v8.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\@types\react\index.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\@types\react\ts5.0\index.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\next\dist\client\tracing\tracer.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\next\dist\shared\lib\utils.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\next\dist\trace\trace.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\next\dist\trace\types.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\typescript\lib\lib.dom.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\typescript\lib\lib.dom.iterable.d.ts, C:\Users\Anton\Desktop\CarbonPilot\frontend\node_modules\typescript\lib\lib.webworker.d.ts
